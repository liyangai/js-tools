var generator = require('./generator')

var a = {
    "rating": {
        "max": 10,
        "average": 7.5,
        "stars": "40",
        "min": 0
    },
    "genres": ["\u52a8\u4f5c", "\u79d1\u5e7b", "\u5192\u9669"],
    "title": "\u8681\u4eba2\uff1a\u9ec4\u8702\u5973\u73b0\u8eab",
    "casts": [{
        "alt": "https:\/\/movie.douban.com\/celebrity\/1002667\/",
        "avatars": {
            "small": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501385708.56.jpg",
            "large": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501385708.56.jpg",
            "medium": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1501385708.56.jpg"
        },
        "name": "\u4fdd\u7f57\u00b7\u8def\u5fb7",
        "id": "1002667"
    }, {
        "alt": "https:\/\/movie.douban.com\/celebrity\/1021963\/",
        "avatars": {
            "small": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4077.jpg",
            "large": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4077.jpg",
            "medium": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4077.jpg"
        },
        "name": "\u4f0a\u4e07\u6770\u7433\u00b7\u8389\u8389",
        "id": "1021963"
    }, {
        "alt": "https:\/\/movie.douban.com\/celebrity\/1131634\/",
        "avatars": {
            "small": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454118774.76.jpg",
            "large": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454118774.76.jpg",
            "medium": "http://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1454118774.76.jpg"
        },
        "name": "\u8fc8\u514b\u5c14\u00b7\u4f69\u7eb3",
        "id": "1131634"
    }],
    "collect_count": 160285,
    "original_title": "Ant-Man and the Wasp",
    "subtype": "movie",
    "directors": [{
        "alt": "https:\/\/movie.douban.com\/celebrity\/1009586\/",
        "avatars": {
            "small": "http://img7.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p38984.jpg",
            "large": "http://img7.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p38984.jpg",
            "medium": "http://img7.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p38984.jpg"
        },
        "name": "\u4f69\u987f\u00b7\u91cc\u5fb7",
        "id": "1009586"
    }],
    "year": "2018",
    "images": {
        "small": "http://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529389608.jpg",
        "large": "http://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529389608.jpg",
        "medium": "http://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529389608.jpg"
    },
    "alt": "https:\/\/movie.douban.com\/subject\/26636712\/",
    "id": "26636712"
}

var b = {
    "rating": {
        "max": 10,
        "average": 7.5,
        "stars": "40",
        "min": 0
    },
    "genres": ["\u52a8\u4f5c", "\u79d1\u5e7b", "\u5192\u9669"],
    "title": "\u8681\u4eba2\uff1a\u9ec4\u8702\u5973\u73b0\u8eab",
    "casts": [{
        "alt": "https:\/\/movie.douban.com\/celebrity\/1002667\/",
        "avatars": {
            "small": "http://",
            "large": "http://g",
            "medium": "http://ipg"
        },
        "name": "\u4fdd\u7f57\u00b7\u8def\u5fb7",
        "id": "1002667"
    }]
}

generator.generator(a, 'movies')