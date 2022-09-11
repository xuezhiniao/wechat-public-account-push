export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx37055d39dd54a79c",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "96960b7c68ff93106bf5be6cbdd40d88",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   },
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "鸣禽",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "odpus5ykGZPN-waMZmI2hw90sY_8",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "NPIw-4VJKyINCRBwf8hnThjbScbZmim12jRQGMWTkRM",
      // 所在省份
      province: "四川",
      // 所在城市
      city: "绵阳",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '11-01',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
//      festivals: [
//        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {"type": "*生日", "name": "老婆", "year": "1996", "date": "09-09"},
//         {"type": "*节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
//         {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
//      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2018-05-13"},
        // 结婚纪念日
        {"keyword": "marry_day", date: ""},
        // 退伍日
        // {"keyword": "ex_day", date: "2022-09-10"},
      ]
    },
    {
      name: "南寻",
      // id: "odpus5x9XFs7JvW0CSG_Nw4BVHRs",
      useTemplateId: "NPIw-4VJKyINCRBwf8hnThjbScbZmim12jRQGMWTkRM",
      province: "四川",
      city: "绵阳",
      horoscopeDate: '08-19',
      horoscopeDateType: '今日',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: [
      // 在一起的日子
      {"keyword": "love_day", date: "2018-05-13"},
      ]
    },
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "GVxIaTtTQ4VlZYGLZ6uDmx4Xxvsjoj5V-hfG_nDQSkc",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "鸣禽",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "odpus5ykGZPN-waMZmI2hw90sY_8",
    },
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   * 年份若在生日里，用于生日岁数的计算；若在节日里，只用于备注是今年还是明年，表面这是个手动更新的节日。
   */
  FESTIVALS: [
	  
	  //农历生日（农历日期，年份也填国历）
      {"type": "*生日", "name": "南寻", "year": "2000", "date": "08-19"},
      {"type": "*生日", "name": "鸣禽", "year": "1993", "date": "09-18"},
      {"type": "*生日", "name": "我妈", "year": "1975", "date": "11-29"},
      {"type": "*生日", "name": "我爸", "year": "1970", "date": "04-27"},
      //以下为农历节日，除夕是腊月29或者30，可能会出问题
      {"type": "*节日", "name": "春节", "year": "", "date": "01-01"},
      {"type": "*节日", "name": "上元", "year": "", "date": "01-15"},
      {"type": "*节日", "name": "端午", "year": "", "date": "05-05"},
      {"type": "*节日", "name": "七夕", "year": "", "date": "07-07"},
      {"type": "*节日", "name": "中元", "year": "", "date": "07-15"},
      {"type": "*节日", "name": "中秋", "year": "", "date": "08-15"},
      {"type": "*节日", "name": "重阳", "year": "", "date": "09-09"},
	  {"type": "*节日", "name": "下元", "year": "", "date": "10-15"},
      {"type": "*节日", "name": "腊八", "year": "", "date": "12-08"},
	  {"type": "*节日", "name": "小年", "year": "", "date": "12-23"},
      {"type": "*节日", "name": "除夕", "year": "", "date": "12-30"},
	  //以下为固定日期节日（日历）
      {"type": "节日", "name": "元旦", "year": "", "date": "01-01"},
      {"type": "节日", "name": "情人节", "year": "", "date": "02-14"},
      {"type": "节日", "name": "妇女节", "year": "", "date": "03-08"},
      {"type": "节日", "name": "劳动节", "year": "", "date": "05-01"},
      {"type": "节日", "name": "儿童节", "year": "", "date": "06-01"},
      {"type": "节日", "name": "教师节", "year": "", "date": "09-10"},
      {"type": "节日", "name": "国庆节", "year": "", "date": "10-01"},
      {"type": "节日", "name": "万圣节", "year": "", "date": "11-01"},
      {"type": "节日", "name": "圣诞节", "year": "", "date": "12-25"},
      {"type": "节日", "name": "双11购物节", "year": "", "date": "11-11"},
      {"type": "节日", "name": "双12购物节", "year": "", "date": "12-12"},
      {"type": "节日", "name": "618购物节", "year": "", "date": "06-18"},
      {"type": "节日", "name": "王者荣耀周年庆", "year": "", "date": "10-28"},
      {"type": "节日", "name": "CSOL周年庆", "year": "", "date": "11-30"},
	  //以下为非固定日期节日（日历），每年手动更新
      {"type": "节日", "name": "立春", "year": "2023", "date": "02-24"},
      {"type": "节日", "name": "春分", "year": "2023", "date": "03-21"},
      {"type": "节日", "name": "清明", "year": "2023", "date": "04-05"},	
      {"type": "节日", "name": "立夏", "year": "2023", "date": "05-06"},
      {"type": "节日", "name": "夏至", "year": "2023", "date": "06-21"},
      {"type": "节日", "name": "入伏", "year": "2023", "date": "07-11"},
      {"type": "节日", "name": "中伏", "year": "2023", "date": "07-21"},
      {"type": "节日", "name": "末伏", "year": "2023", "date": "08-10"},
      {"type": "节日", "name": "出伏", "year": "2023", "date": "08-20"},
      {"type": "节日", "name": "立秋", "year": "2023", "date": "08-08"},
      {"type": "节日", "name": "秋分", "year": "2022", "date": "09-23"},
      {"type": "节日", "name": "立冬", "year": "2022", "date": "11-07"},
      {"type": "节日", "name": "冬至", "year": "2022", "date": "12-22"},
      
      {"type": "节日", "name": "母亲节", "year": "2023", "date": "05-14"},
      {"type": "节日", "name": "父亲节", "year": "2023", "date": "06-18"},
      {"type": "节日", "name": "复活节", "year": "2023", "date": "03-31"},
      {"type": "节日", "name": "感恩节", "year": "2022", "date": "11-24"},

      //steam促销活动，感恩节需每年手动更新
      {"type": "*节日", "name": "steam春节特卖（大致时间）", "year": "", "date": "12-29"},  //根据春节，提前2天
      {"type": "节日", "name": "steam夏季特卖（大致时间）", "year": "", "date": "06-23"},      //根据美国独立日(7月4日)，提前10天
      {"type": "节日", "name": "steam秋季特卖（大致时间）", "year": "2023", "date": "11-22"},  //根据感恩节，提前2天
      {"type": "节日", "name": "steam冬季特卖（大致时间）", "year": "", "date": "12-20"},      //根据圣诞节，提前5天左右
      {"type": "节日", "name": "steam万圣节特卖（大致时间）", "year": "", "date": "11-28"},    //根据万圣节，提前3天
      {"type": "节日", "name": "steam黄金周特卖（大致时间）", "year": "", "date": "04-29"},    //steam固定节，约4月29日-30日开始
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 6,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: ""},
    // 结婚纪念日
    {"keyword": "marry_day", date: ""},
    // 退伍日
    {"keyword": "ex_day", date: ""},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    //{"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
