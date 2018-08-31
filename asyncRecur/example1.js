resourceManager.prototype.doDownloadDir = function (bookCode,node,localTree,cloudTree,downloadClouds) {
    var def = $.Deferred()
    var canDownLoadFiles = downloadClouds.filter(function (downloadCloud) {
        return _.findIndex(cloudTree.children,function (node) {
                return node.fid == downloadCloud.fid
            })!=-1;
    })
    // var oldlocalNode = localTree;
    // var oldCloudNode = cloudTree;
    var needDownLoadFiles = []

    var dir_add = function (oldCloudNode,oldlocalNode,addFile) {
        return new Promise(function (resolve,reject) {
            var newCloudNode =  _.find(oldCloudNode.children,function (cloudChild) {
                return cloudChild.fid == addFile.fid;
            })
            var loclaExit = false;
            var newLocalNode;
            if(!oldlocalNode || !oldlocalNode.children||oldlocalNode.children.length == 0){  //在本地找不到文件（夹）需要创建
                //pass
            }else{
                newLocalNode = _.find(oldlocalNode.children,function (localChild) {
                    return localChild.syncinfo_platformid == addFile.fid
                })
            }
            if(newLocalNode){  //在本地能找到
                resolve({
                    cloudNode:newCloudNode,
                    localNode:newLocalNode
                })
            }else{
                if(!newCloudNode.isdir){ //云端文件
                    newCloudNode.parenteFolderUuid = oldlocalNode.uuid;
                    needDownLoadFiles.push(newCloudNode)
                    resolve({
                        cloudNode:newCloudNode,
                        localNode:newLocalNode
                    })
                }else{
                    var condition = {
                        bookCode:bookCode || '',
                        unit1:node.unit1 ||'',
                        unit2:node.unit2 ||'',
                        unit3:node.unit3 ||'',
                        unit4:node.unit4 ||'',
                        isDir:1,
                        parentFolder:oldlocalNode.uuid,
                        file:newCloudNode.name||'',
                        syncstatus:configApp.SyncStatus.complete,
                        syncinfo_platformid:newCloudNode.fid,
                        syncinfo_syncversion:newCloudNode.version,
                    }
                    beikeApi.addBeikeRes(condition).done(function (ret) {
                        if (ret.code == 0 && Array.isArray(ret.data)) {
                            var fileLocalParent = ret.data[0].uuid;
                            resolve({
                                cloudNode:newCloudNode,
                                localNode:{
                                    uuid:fileLocalParent,
                                    syncinfo_platformid:newCloudNode.fid
                                }
                            })
                        } else {
                            reject("插入错误")
                        }
                    }).fail(function (e) {
                        reject(e)
                    })
                }
            }

        })
    }
    var dir_adds = function (oldCloudNode,oldlocalNode,addFile) {
        return dir_add(oldCloudNode,oldlocalNode,addFile).then(function (rs) {
            var promiseList = [];
            if (Array.isArray(rs.cloudNode.children) && rs.cloudNode.children.length > 0) {
                rs.cloudNode.children.forEach(function (el) {
                    promiseList.push(dir_adds(rs.cloudNode,rs.localNode,el));
                });
            }
            if (promiseList.length > 0) {
                return Promise.all(promiseList);
            } else {
                return rs;
            }
        })
    }


    var promiseL = [];
    canDownLoadFiles.forEach(function (el) {
        promiseL.push(dir_adds(cloudTree,localTree,el));
    })
    Promise.all(promiseL).then(function () {
        def.resolve(needDownLoadFiles)
    },function (e) {
        def.reject(e)
    })



    return def.promise()

}