define({ "api": [
  {
    "type": "post",
    "url": "/admin/delete",
    "title": "删除账户",
    "name": "AdminDelete",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/info",
    "title": "获取管理员个人资料",
    "name": "AdminInfo",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/info"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/list",
    "title": "获取管理员列表",
    "name": "AdminList",
    "group": "Admin",
    "sampleRequest": [
      {
        "url": "/admin/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/login",
    "title": "登录管理员账户",
    "description": "<p>登录成功， 返回token, 请在头部headers中设置Authorization: <code>Bearer ${token}</code>, 所有请求都必须携带token;</p>",
    "name": "AdminLogin",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/register",
    "title": "注册管理员账户",
    "description": "<p>注册成功， 返回token, 请在头部headers中设置Authorization: <code>Bearer ${token}</code>,所有请求都必须携带token;</p>",
    "name": "AdminRegister",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱地址.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/register"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/info",
    "title": "编辑管理员个人资料",
    "name": "AdminUpdate",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>管理员id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像地址.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/admin/info"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/article/add",
    "title": "添加新的文章",
    "name": "AddArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章摘要.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "main_photo",
            "description": "<p>文章主图.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/add"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/category",
    "title": "获取某分类下的文章列表",
    "description": "<p>注意：默认按照日期降序排序</p>",
    "name": "ArticleCategory",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每一页文章数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageindex",
            "description": "<p>第几页.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/detail",
    "title": "获取指定id的文章详情",
    "name": "ArticleDetail",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/list",
    "title": "获取所有文章列表",
    "description": "<p>注意：默认按照日期降序排序</p>",
    "name": "ArticleList",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每一页文章数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageindex",
            "description": "<p>第几页.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/delete",
    "title": "删除指定id的文章",
    "name": "DeleteArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article/edit",
    "title": "编辑指定id文章",
    "name": "EditArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文章id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章摘要.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "main_photo",
            "description": "<p>文章主图.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/article/edit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/category/add",
    "title": "添加分类",
    "description": "<p>注意：目前最多支持二级分类</p>",
    "name": "AddCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>父级分类id.一级分类的parent_id=0</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/add"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/detail",
    "title": "获取指定id的分类详情",
    "name": "CategoryDetail",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/list",
    "title": "获取所有分类",
    "name": "CategoryList",
    "group": "Category",
    "sampleRequest": [
      {
        "url": "/category/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/sub",
    "title": "获取子级分类",
    "name": "CategorySub",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>父级id。一级分类的父类id=0;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/sub"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category/delete",
    "title": "删除指定id分类",
    "description": "<p>注意：删除指定id分类,如果其拥有子级分类不允许删除，必须清空子分类才可删除。</p>",
    "name": "DeleteCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category/edit",
    "title": "编辑指定id分类",
    "name": "EditCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>父级分类id.一级分类的parent_id=0</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/category/edit"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/upload/common/",
    "title": "通用图片上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，不限制尺寸，avatar存储至avatar文件夹,common存储至common文件夹</p>",
    "name": "uploadCommon",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"common\"",
              "\"avatar\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>上传类型：avatar--头像上传；common--通用上传；</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/upload/common/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/upload/delete",
    "title": "删除图片API",
    "description": "<p>如果上传错误的图片，通过此API删除错误的图片</p>",
    "name": "uploadDelete",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>图片文件路径,注：src='./images/goods/file.jpg'，必须严格按照规范路径，'./images'不可省略;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/upload/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/upload/editor/",
    "title": "富文本编辑器图片上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，不限制尺寸，存储至details文件夹</p>",
    "name": "uploadEditor",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/upload/editor/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/user/delete",
    "title": "删除账户",
    "name": "UserDelete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/info",
    "title": "获取用户个人资料",
    "name": "UserInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/info"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/list",
    "title": "获取用户列表",
    "name": "UserList",
    "group": "User",
    "sampleRequest": [
      {
        "url": "/user/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录普通用户",
    "name": "UserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "注册普通用户",
    "name": "UserRegister",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/register"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/info",
    "title": "编辑个人资料",
    "name": "UserUpdate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/user/info"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
