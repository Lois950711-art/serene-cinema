export interface Movie {
  id: number;
  title: string;
  titleEn: string;
  year: number;
  genre: string;
  rating: number;
  tags: string[];
  conflict: string;
  recommendation: string;
  poster: string;
}

export const movies: Movie[] = [
  // ===== 喜剧 Comedy =====
  { id: 1, title: "菊次郎的夏天", titleEn: "Kikujiro", year: 1999, genre: "喜剧", rating: 8.8, tags: ["喜剧", "搞笑", "温暖", "治愈", "comedy"], conflict: "一个混混大叔带着小男孩踏上寻母之旅", recommendation: "北野武最温柔的一面，笑着笑着就哭了。", poster: "/posters/kikujiro.jpg" },
  { id: 2, title: "白日梦想家", titleEn: "The Secret Life of Walter Mitty", year: 2013, genre: "喜剧", rating: 8.3, tags: ["喜剧", "冒险", "梦想", "治愈", "comedy"], conflict: "一个爱做白日梦的小职员踏上真正的冒险", recommendation: "生活的意义，就是走出去拥抱世界。", poster: "/posters/walter-mitty.jpg" },
  { id: 3, title: "绿皮书", titleEn: "Green Book", year: 2018, genre: "喜剧", rating: 8.9, tags: ["喜剧", "温暖", "友情", "comedy"], conflict: "黑人钢琴家与白人司机穿越种族偏见的公路之旅", recommendation: "偏见的墙，被一路上的笑声和泪水融化。", poster: "/posters/green-book.jpg" },
  { id: 4, title: "布达佩斯大饭店", titleEn: "The Grand Budapest Hotel", year: 2014, genre: "喜剧", rating: 8.8, tags: ["喜剧", "搞笑", "荒诞", "comedy"], conflict: "传奇门童卷入一场遗产争夺与谋杀谜案", recommendation: "韦斯·安德森的糖果色世界，荒诞中藏着深情。", poster: "/posters/grand-budapest-hotel.jpg" },

  // ===== 剧情 Drama =====
  { id: 5, title: "荒野生存", titleEn: "Into the Wild", year: 2007, genre: "剧情", rating: 8.6, tags: ["剧情", "自由", "孤独", "人生", "感动"], conflict: "名校毕业生放弃一切走向阿拉斯加荒野", recommendation: "自由的代价是孤独，但他甘之如饴。", poster: "/posters/into-the-wild.jpg" },
  { id: 6, title: "雨人", titleEn: "Rain Man", year: 1988, genre: "剧情", rating: 8.7, tags: ["剧情", "亲情", "感动", "人生"], conflict: "自私的弟弟与自闭症哥哥的公路之旅改变了彼此", recommendation: "血浓于水，但爱需要时间去发现。", poster: "/posters/rain-man.jpg" },
  { id: 7, title: "小森林", titleEn: "Little Forest", year: 2018, genre: "剧情", rating: 8.3, tags: ["剧情", "治愈", "美食", "人生", "感动"], conflict: "城市受挫的女孩回到乡村用四季美食疗愈自己", recommendation: "一蔬一饭间，找回被城市弄丢的自己。", poster: "/posters/little-forest.jpg" },
  { id: 8, title: "肖申克的救赎", titleEn: "The Shawshank Redemption", year: 1994, genre: "剧情", rating: 9.7, tags: ["剧情", "自由", "希望", "人生", "感动"], conflict: "蒙冤入狱的银行家用二十年挖出自由之路", recommendation: "希望是好东西，也许是最好的东西。", poster: "/posters/shawshank-redemption.jpg" },

  // ===== 爱情 Romance =====
  { id: 9, title: "在路上", titleEn: "On the Road", year: 2012, genre: "爱情", rating: 7.1, tags: ["爱情", "自由", "浪漫", "romance"], conflict: "垮掉的一代在公路上寻找爱与存在的意义", recommendation: "路的尽头没有答案，但旅途本身就是意义。", poster: "/posters/on-the-road.jpg" },
  { id: 10, title: "摩托日记", titleEn: "The Motorcycle Diaries", year: 2004, genre: "爱情", rating: 8.5, tags: ["爱情", "冒险", "青春", "浪漫", "romance"], conflict: "青年切·格瓦拉骑摩托穿越南美改变人生信仰", recommendation: "每段旅途，都在重塑你看世界的方式。", poster: "/posters/motorcycle-diaries.jpg" },
  { id: 11, title: "泰坦尼克号", titleEn: "Titanic", year: 1997, genre: "爱情", rating: 9.4, tags: ["爱情", "浪漫", "经典", "romance"], conflict: "跨越阶级的爱情在沉船中走向永恒", recommendation: "你跳我也跳，这句话承载了所有义无反顾。", poster: "/posters/titanic.jpg" },
  { id: 12, title: "爱乐之城", titleEn: "La La Land", year: 2016, genre: "爱情", rating: 8.4, tags: ["爱情", "浪漫", "梦想", "音乐", "romance"], conflict: "追梦的爵士乐手与女演员在洛杉矶相爱又分离", recommendation: "最好的爱情，是成全彼此去追逐星辰。", poster: "/posters/la-la-land.jpg" },

  // ===== 动作 Action =====
  { id: 13, title: "末路狂花", titleEn: "Thelma & Louise", year: 1991, genre: "动作", rating: 8.2, tags: ["动作", "自由", "刺激", "冒险", "action"], conflict: "两个闺蜜从周末出逃变成亡命天涯", recommendation: "与其被生活困住，不如一脚油门冲向悬崖。", poster: "/posters/thelma-louise.jpg" },
  { id: 14, title: "逍遥骑士", titleEn: "Easy Rider", year: 1969, genre: "动作", rating: 8.1, tags: ["动作", "自由", "冒险", "叛逆", "action"], conflict: "两个嬉皮士骑着哈雷穿越美国寻找自由", recommendation: "自由从来不是免费的，但值得用一切去换。", poster: "/posters/easy-rider.jpg" },
  { id: 15, title: "疯狂的麦克斯：狂暴之路", titleEn: "Mad Max Fury Road", year: 2015, genre: "动作", rating: 8.6, tags: ["动作", "刺激", "末日", "action"], conflict: "末日荒漠中一场长达两小时的疯狂追逐", recommendation: "全程肾上腺素飙升，动作片的天花板。", poster: "/posters/mad-max-fury-road.jpg" },
  { id: 16, title: "蝙蝠侠：黑暗骑士", titleEn: "The Dark Knight", year: 2008, genre: "动作", rating: 9.2, tags: ["动作", "刺激", "英雄", "action"], conflict: "蝙蝠侠面对小丑的混乱哲学被迫做出不可能的选择", recommendation: "希斯·莱杰的小丑，让你重新定义何为反派。", poster: "/posters/dark-knight.jpg" },

  // ===== 科幻 Sci-Fi =====
  { id: 17, title: "星际穿越", titleEn: "Interstellar", year: 2014, genre: "科幻", rating: 9.4, tags: ["科幻", "未来", "太空", "sci-fi"], conflict: "父亲穿越虫洞拯救地球却错过女儿的一生", recommendation: "爱是唯一能穿越时间和空间的力量。", poster: "/posters/interstellar.jpg" },
  { id: 18, title: "黑客帝国", titleEn: "The Matrix", year: 1999, genre: "科幻", rating: 9.1, tags: ["科幻", "未来", "黑客", "sci-fi"], conflict: "程序员发现现实世界是机器制造的虚拟牢笼", recommendation: "红药丸还是蓝药丸？真相和幸福你选哪个？", poster: "/posters/the-matrix.jpg" },
  { id: 19, title: "盗梦空间", titleEn: "Inception", year: 2010, genre: "科幻", rating: 9.3, tags: ["科幻", "未来", "梦境", "sci-fi"], conflict: "盗梦者必须在别人梦中植入一个想法", recommendation: "诺兰用梦境嵌套告诉你：放手，才能回家。", poster: "/posters/inception.jpg" },
  { id: 20, title: "银翼杀手2049", titleEn: "Blade Runner 2049", year: 2017, genre: "科幻", rating: 8.3, tags: ["科幻", "未来", "人工智能", "sci-fi"], conflict: "复制人警探追查真相却发现自己存在的意义", recommendation: "什么是真实？当记忆都可以被制造。", poster: "/posters/blade-runner-2049.jpg" },

  // ===== 动画 Animation =====
  { id: 21, title: "千与千寻", titleEn: "Spirited Away", year: 2001, genre: "动画", rating: 9.4, tags: ["动画", "动漫", "奇幻", "成长", "animation"], conflict: "小女孩闯入神灵世界拯救变成猪的父母", recommendation: "宫崎骏写给每个孩子的成长寓言。", poster: "/posters/spirited-away.jpg" },
  { id: 22, title: "机器人总动员", titleEn: "WALL-E", year: 2008, genre: "动画", rating: 9.3, tags: ["动画", "动漫", "科幻", "浪漫", "animation"], conflict: "末日地球上最后一个机器人爱上了来自太空的她", recommendation: "不会说话的机器人，演绎了最纯粹的爱情。", poster: "/posters/wall-e.jpg" },
  { id: 23, title: "寻梦环游记", titleEn: "Coco", year: 2017, genre: "动画", rating: 9.1, tags: ["动画", "动漫", "亲情", "音乐", "animation"], conflict: "追梦男孩闯入亡灵世界寻找被遗忘的曾祖父", recommendation: "死亡不是终点，被遗忘才是。请记住我。", poster: "/posters/coco.jpg" },
  { id: 24, title: "你的名字", titleEn: "Your Name", year: 2016, genre: "动画", rating: 8.4, tags: ["动画", "动漫", "爱情", "奇幻", "animation"], conflict: "两个从未谋面的少年少女在梦中交换身体", recommendation: "跨越时空去找你，是我做过最浪漫的事。", poster: "/posters/your-name.jpg" },
];
