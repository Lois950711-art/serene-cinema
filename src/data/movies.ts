export interface Movie {
  id: number;
  title: string;
  titleEn: string;
  rating: number;
  year: number;
  poster: string;
  conflict: string;
  recommendation: string;
  genre: string;
  tags: string[];
}

function posterUrl(titleEn: string): string {
  const promptText = `Cinematic movie poster for ${titleEn}`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(promptText)}?width=600&height=900&nologo=true`;
}

export const movies: Movie[] = [
  { id: 1, title: "荒野生存", titleEn: "Into the Wild", rating: 8.6, year: 2007, poster: posterUrl("Into the Wild"), conflict: "一个放弃一切走向荒野的年轻人，在自由与生存之间做出终极抉择。", recommendation: "当你厌倦了城市的喧嚣，这部电影会让你重新审视自由的代价。", genre: "公路 / 冒险", tags: ["公路", "冒险", "自由", "荒野", "剧情"] },
  { id: 2, title: "逍遥骑士", titleEn: "Easy Rider", rating: 7.3, year: 1969, poster: posterUrl("Easy Rider"), conflict: "两个骑士追寻美国梦的旅途，却撞上了社会偏见的铁壁。", recommendation: "关于自由最纯粹的表达，每一帧都是风的味道。", genre: "公路 / 剧情", tags: ["公路", "自由", "剧情", "经典"] },
  { id: 3, title: "末路狂花", titleEn: "Thelma and Louise", rating: 8.2, year: 1991, poster: posterUrl("Thelma and Louise"), conflict: "两位女性的逃亡之路，在法律与尊严之间选择了纵身一跃。", recommendation: "那一刻的放手，是她们给自己最好的礼物。", genre: "公路 / 犯罪", tags: ["公路", "犯罪", "女性", "自由", "剧情", "动作"] },
  { id: 4, title: "雨人", titleEn: "Rain Man", rating: 8.7, year: 1988, poster: posterUrl("Rain Man"), conflict: "一段公路旅途揭开了兄弟之间金钱与亲情的深层博弈。", recommendation: "有些亲情需要走很远的路，才能真正靠近彼此。", genre: "公路 / 剧情", tags: ["公路", "剧情", "亲情", "治愈"] },
  { id: 5, title: "在路上", titleEn: "On the Road", rating: 6.8, year: 2012, poster: posterUrl("On the Road"), conflict: "垮掉的一代在路上寻找意义，却在放纵中迷失了方向。", recommendation: "路的尽头什么都没有，但路本身就是全部。", genre: "公路 / 文艺", tags: ["公路", "文艺", "自由", "剧情"] },
  { id: 6, title: "绿皮书", titleEn: "Green Book", rating: 8.9, year: 2018, poster: posterUrl("Green Book"), conflict: "黑人钢琴家与白人司机穿越种族隔离的南方，偏见与友情交锋。", recommendation: "改变世界太难，但改变一个人的心，一趟旅途就够了。", genre: "公路 / 传记", tags: ["公路", "传记", "治愈", "友情", "剧情", "喜剧"] },
  { id: 7, title: "菊次郎的夏天", titleEn: "Kikujiro", rating: 8.8, year: 1999, poster: posterUrl("Kikujiro"), conflict: "一个不靠谱的大叔带着小男孩寻母，温柔藏在粗糙之下。", recommendation: "夏天、蝉鸣、和一个笨拙却温暖的大人。", genre: "公路 / 喜剧", tags: ["公路", "治愈", "喜剧", "温暖"] },
  { id: 8, title: "白日梦想家", titleEn: "The Secret Life of Walter Mitty", rating: 8.3, year: 2013, poster: posterUrl("The Secret Life of Walter Mitty"), conflict: "一个平凡白日梦者踏上真实冒险，在虚幻与现实间找到自我。", recommendation: "生活的意义，在于走出去亲眼看见。", genre: "冒险 / 剧情", tags: ["冒险", "剧情", "治愈", "励志"] },
  { id: 9, title: "摩托日记", titleEn: "The Motorcycle Diaries", rating: 8.2, year: 2004, poster: posterUrl("The Motorcycle Diaries"), conflict: "年轻的切·格瓦拉在南美大地上目睹贫穷，理想主义被现实点燃。", recommendation: "改变世界之前，先让世界改变你。", genre: "公路 / 传记", tags: ["公路", "传记", "冒险", "历史", "剧情"] },
  { id: 10, title: "小森林", titleEn: "Little Forest", rating: 9.0, year: 2018, poster: posterUrl("Little Forest"), conflict: "逃离都市回到乡村的女孩，在四季轮转中与自己和解。", recommendation: "有时候，一碗热汤就能治愈所有的不安。", genre: "治愈 / 美食", tags: ["治愈", "美食", "田园", "文艺", "剧情"] },

  // ===== 喜剧片 (15部) =====
  { id: 11, title: "疯狂动物城", titleEn: "Zootopia", rating: 9.2, year: 2016, poster: posterUrl("Zootopia"), conflict: "一只兔子警官在偏见丛生的动物城里，揭开了一场精心策划的阴谋。", recommendation: "谁说小兔子不能改变世界？", genre: "喜剧 / 动画", tags: ["喜剧", "动画", "治愈", "励志"] },
  { id: 12, title: "大话西游之月光宝盒", titleEn: "A Chinese Odyssey Part One", rating: 9.0, year: 1995, poster: posterUrl("A Chinese Odyssey Part One"), conflict: "至尊宝在爱情与命运之间挣扎，却发现深情本就是一场劫难。", recommendation: "曾经有一段真挚的爱情，我没有珍惜。", genre: "喜剧 / 奇幻", tags: ["喜剧", "奇幻", "爱情", "经典"] },
  { id: 13, title: "布达佩斯大饭店", titleEn: "The Grand Budapest Hotel", rating: 8.8, year: 2014, poster: posterUrl("The Grand Budapest Hotel"), conflict: "一位传奇酒店管家卷入了一桩遗产争夺谋杀案。", recommendation: "在一个坍塌的旧世界里，优雅就是最后的反抗。", genre: "喜剧 / 冒险", tags: ["喜剧", "冒险", "文艺"] },
  { id: 14, title: "三傻大闹宝莱坞", titleEn: "3 Idiots", rating: 9.2, year: 2009, poster: posterUrl("3 Idiots"), conflict: "三个大学生对抗刻板教育体制，用热爱证明成功的另一种可能。", recommendation: "追求卓越，成功自然会追上你。", genre: "喜剧 / 剧情", tags: ["喜剧", "剧情", "励志", "治愈"] },
  { id: 15, title: "功夫", titleEn: "Kung Fu Hustle", rating: 8.6, year: 2004, poster: posterUrl("Kung Fu Hustle"), conflict: "一个混混想加入黑帮，却阴差阳错成了拯救苍生的英雄。", recommendation: "每个人心里都住着一个盖世英雄。", genre: "喜剧 / 动作", tags: ["喜剧", "动作", "经典"] },
  { id: 16, title: "人生遥控器", titleEn: "Click", rating: 7.6, year: 2006, poster: posterUrl("Click movie 2006"), conflict: "一个拥有万能遥控器的男人，快进了人生却错过了一切。", recommendation: "生活没有快进键，每一秒都值得经历。", genre: "喜剧 / 奇幻", tags: ["喜剧", "奇幻", "治愈"] },
  { id: 17, title: "冒牌天神", titleEn: "Bruce Almighty", rating: 7.5, year: 2003, poster: posterUrl("Bruce Almighty"), conflict: "一个抱怨上帝的男人得到了神的力量，才发现做神也不容易。", recommendation: "当你拥有一切时，才知道什么最珍贵。", genre: "喜剧 / 奇幻", tags: ["喜剧", "奇幻", "治愈"] },
  { id: 18, title: "缝纫机乐队", titleEn: "City of Rock", rating: 7.0, year: 2017, poster: posterUrl("City of Rock"), conflict: "一群小镇青年为保卫摇滚公园组建乐队，梦想与现实激烈碰撞。", recommendation: "梦想可能不值钱，但它是活着最好的理由。", genre: "喜剧 / 音乐", tags: ["喜剧", "音乐", "励志"] },
  { id: 19, title: "土拨鼠之日", titleEn: "Groundhog Day", rating: 8.3, year: 1993, poster: posterUrl("Groundhog Day"), conflict: "一个自私的主播陷入无限重复的一天，直到学会真正去爱。", recommendation: "如果明天不会来，你会怎么过今天？", genre: "喜剧 / 奇幻", tags: ["喜剧", "奇幻", "爱情", "经典"] },
  { id: 20, title: "你好，李焕英", titleEn: "Hi Mom", rating: 8.1, year: 2021, poster: posterUrl("Hi Mom"), conflict: "穿越回过去的女儿想让妈妈高兴，却发现妈妈最大的心愿就是她。", recommendation: "你不必成为别人的骄傲，你就是妈妈的全部。", genre: "喜剧 / 剧情", tags: ["喜剧", "剧情", "亲情", "治愈"] },
  { id: 21, title: "夏洛特烦恼", titleEn: "Goodbye Mr Loser", rating: 7.8, year: 2015, poster: posterUrl("Goodbye Mr Loser"), conflict: "一个失意中年人穿越回青春，拥有一切后才发现什么最重要。", recommendation: "得到过全世界，才懂得身边人才是唯一。", genre: "喜剧 / 爱情", tags: ["喜剧", "爱情", "治愈"] },
  { id: 22, title: "宿醉", titleEn: "The Hangover", rating: 7.8, year: 2009, poster: posterUrl("The Hangover"), conflict: "婚前派对醒来后新郎失踪，三个伴郎必须拼凑昨夜的疯狂真相。", recommendation: "人生最疯的夜晚，可能恰好是最难忘的。", genre: "喜剧", tags: ["喜剧"] },
  { id: 23, title: "美丽人生", titleEn: "Life Is Beautiful", rating: 9.5, year: 1997, poster: posterUrl("Life Is Beautiful"), conflict: "一位父亲在纳粹集中营里用谎言为儿子编织了一场生存游戏。", recommendation: "最伟大的爱，是把地狱变成童话。", genre: "喜剧 / 剧情", tags: ["喜剧", "剧情", "亲情", "经典"] },
  { id: 24, title: "让子弹飞", titleEn: "Let the Bullets Fly", rating: 9.0, year: 2010, poster: posterUrl("Let the Bullets Fly"), conflict: "一个土匪假扮县长与恶霸斗智斗勇，权力的游戏暗流涌动。", recommendation: "站着，也能把钱挣了。", genre: "喜剧 / 动作", tags: ["喜剧", "动作", "经典"] },
  { id: 25, title: "唐伯虎点秋香", titleEn: "Flirting Scholar", rating: 8.3, year: 1993, poster: posterUrl("Flirting Scholar"), conflict: "才子为追求真爱甘愿入府为奴，荒诞背后是对自由的渴望。", recommendation: "最高级的浪漫，是放下一切去靠近你。", genre: "喜剧 / 爱情", tags: ["喜剧", "爱情", "经典"] },

  // ===== 剧情片 (15部) =====
  { id: 26, title: "肖申克的救赎", titleEn: "The Shawshank Redemption", rating: 9.7, year: 1994, poster: posterUrl("The Shawshank Redemption"), conflict: "一个被冤入狱的银行家用二十年的隐忍换来了自由。", recommendation: "希望是好事，也许是世间最好的事。", genre: "剧情", tags: ["剧情", "经典", "励志"] },
  { id: 27, title: "阿甘正传", titleEn: "Forrest Gump", rating: 9.5, year: 1994, poster: posterUrl("Forrest Gump"), conflict: "一个智商只有75的男人，用最简单的方式跑赢了复杂的世界。", recommendation: "人生就像一盒巧克力，你永远不知道下一颗是什么。", genre: "剧情", tags: ["剧情", "经典", "励志", "治愈"] },
  { id: 28, title: "霸王别姬", titleEn: "Farewell My Concubine", rating: 9.6, year: 1993, poster: posterUrl("Farewell My Concubine"), conflict: "两个京剧演员在时代洪流中，艺术信仰与个人命运被无情碾碎。", recommendation: "不疯魔，不成活。", genre: "剧情 / 历史", tags: ["剧情", "历史", "经典", "文艺"] },
  { id: 29, title: "辛德勒的名单", titleEn: "Schindlers List", rating: 9.5, year: 1993, poster: posterUrl("Schindlers List"), conflict: "一个纳粹商人在暴利与良知间选择，最终用财富换回了千余条生命。", recommendation: "救一个人，就是救一个世界。", genre: "剧情 / 历史", tags: ["剧情", "历史", "经典"] },
  { id: 30, title: "活着", titleEn: "To Live", rating: 9.3, year: 1994, poster: posterUrl("To Live 1994 movie"), conflict: "一个普通人在历史巨变中不断失去至亲，却始终选择活下去。", recommendation: "活着本身，就已经是最大的勇气。", genre: "剧情", tags: ["剧情", "历史", "经典"] },
  { id: 31, title: "寄生虫", titleEn: "Parasite", rating: 8.8, year: 2019, poster: posterUrl("Parasite"), conflict: "一个穷人家庭渗透进富人家庭，阶级的裂缝撕开了所有人的伪装。", recommendation: "气味是洗不掉的，阶级也是。", genre: "剧情 / 惊悚", tags: ["剧情", "惊悚", "经典"] },
  { id: 32, title: "海上钢琴师", titleEn: "The Legend of 1900", rating: 9.3, year: 1998, poster: posterUrl("The Legend of 1900"), conflict: "一个在海上出生的钢琴天才，终其一生不敢踏上陆地。", recommendation: "有些人注定属于海，你不必理解。", genre: "剧情 / 音乐", tags: ["剧情", "音乐", "文艺", "经典"] },
  { id: 33, title: "当幸福来敲门", titleEn: "The Pursuit of Happyness", rating: 9.1, year: 2006, poster: posterUrl("The Pursuit of Happyness"), conflict: "一个破产的父亲带着儿子睡地铁站，用绝望换来最后一次翻身机会。", recommendation: "别让任何人告诉你，你不行。", genre: "剧情 / 传记", tags: ["剧情", "传记", "励志", "亲情"] },
  { id: 34, title: "触不可及", titleEn: "The Intouchables", rating: 9.2, year: 2011, poster: posterUrl("The Intouchables"), conflict: "一个瘫痪的富人和一个贫民区青年，在巨大差异中找到了灵魂共振。", recommendation: "最好的友情，是让彼此重新活过来。", genre: "剧情 / 喜剧", tags: ["剧情", "喜剧", "治愈", "友情"] },
  { id: 35, title: "教父", titleEn: "The Godfather", rating: 9.3, year: 1972, poster: posterUrl("The Godfather"), conflict: "一个不愿卷入家族生意的儿子，最终成为最冷酷的教父。", recommendation: "权力的代价，是失去你曾经是的那个人。", genre: "剧情 / 犯罪", tags: ["剧情", "犯罪", "经典"] },
  { id: 36, title: "搏击俱乐部", titleEn: "Fight Club", rating: 9.0, year: 1999, poster: posterUrl("Fight Club"), conflict: "一个失眠白领创造了另一个自己，用暴力对抗消费主义的空虚。", recommendation: "你不是你的工作，不是你的存款。", genre: "剧情 / 惊悚", tags: ["剧情", "惊悚", "经典"] },
  { id: 37, title: "楚门的世界", titleEn: "The Truman Show", rating: 9.3, year: 1998, poster: posterUrl("The Truman Show"), conflict: "一个男人发现他的整个人生都是一场真人秀，所有人都在演戏。", recommendation: "如果再也碰不到你，祝你早安、午安和晚安。", genre: "剧情", tags: ["剧情", "经典", "科幻"] },
  { id: 38, title: "放牛班的春天", titleEn: "The Chorus", rating: 9.3, year: 2004, poster: posterUrl("The Chorus 2004 movie"), conflict: "一个失意的音乐老师用歌声唤醒了一群被放弃的问题少年。", recommendation: "每个孩子都值得被听见。", genre: "剧情 / 音乐", tags: ["剧情", "音乐", "治愈"] },
  { id: 39, title: "闻香识女人", titleEn: "Scent of a Woman", rating: 9.0, year: 1992, poster: posterUrl("Scent of a Woman"), conflict: "一个失明退役军官带着年轻学生赴一场告别之旅，在绝望中重燃生机。", recommendation: "如果我是上帝，我会把眼睛给他。", genre: "剧情", tags: ["剧情", "经典"] },
  { id: 40, title: "无间道", titleEn: "Infernal Affairs", rating: 9.3, year: 2002, poster: posterUrl("Infernal Affairs"), conflict: "一个卧底警察和一个卧底黑帮在身份迷局中互相追杀。", recommendation: "我想做个好人。来不及了。", genre: "剧情 / 犯罪", tags: ["剧情", "犯罪", "动作", "经典"] },

  // ===== 爱情片 (15部) =====
  { id: 41, title: "泰坦尼克号", titleEn: "Titanic", rating: 9.4, year: 1997, poster: posterUrl("Titanic"), conflict: "跨越阶级的爱情在沉船灾难中被永远定格。", recommendation: "你跳，我也跳。", genre: "爱情 / 灾难", tags: ["爱情", "经典", "剧情"] },
  { id: 42, title: "花样年华", titleEn: "In the Mood for Love", rating: 8.6, year: 2000, poster: posterUrl("In the Mood for Love"), conflict: "两个被伴侣背叛的人在暧昧中克制着彼此的心。", recommendation: "那些没有说出口的话，成了一辈子的秘密。", genre: "爱情 / 剧情", tags: ["爱情", "剧情", "文艺", "经典"] },
  { id: 43, title: "怦然心动", titleEn: "Flipped", rating: 9.1, year: 2010, poster: posterUrl("Flipped"), conflict: "一个女孩爱上对面的男孩，而男孩直到差点失去才学会珍惜。", recommendation: "有些人浅薄，有些人金玉其外，但总有一天你会遇到彩虹般的人。", genre: "爱情", tags: ["爱情", "治愈", "青春"] },
  { id: 44, title: "恋恋笔记本", titleEn: "The Notebook", rating: 8.5, year: 2004, poster: posterUrl("The Notebook"), conflict: "门第之别拆散了一对恋人，多年后记忆褪去但爱没有。", recommendation: "如果你是一只鸟，我也是一只鸟。", genre: "爱情 / 剧情", tags: ["爱情", "剧情", "经典"] },
  { id: 45, title: "真爱至上", titleEn: "Love Actually", rating: 8.6, year: 2003, poster: posterUrl("Love Actually"), conflict: "九段交错的爱情故事在圣诞前夕同时绽放与碎裂。", recommendation: "爱，无处不在。", genre: "爱情 / 喜剧", tags: ["爱情", "喜剧", "治愈"] },
  { id: 46, title: "情书", titleEn: "Love Letter", rating: 8.9, year: 1995, poster: posterUrl("Love Letter 1995 movie"), conflict: "一封写给逝者的信意外被回复，揭开了一段从未表白的暗恋。", recommendation: "你好吗？我很好。", genre: "爱情 / 剧情", tags: ["爱情", "剧情", "文艺"] },
  { id: 47, title: "爱在黎明破晓前", titleEn: "Before Sunrise", rating: 8.8, year: 1995, poster: posterUrl("Before Sunrise"), conflict: "两个陌生人在火车上相遇，决定在维也纳共度一个可能永无下文的夜晚。", recommendation: "有些夜晚短暂到足以铭记一生。", genre: "爱情", tags: ["爱情", "文艺"] },
  { id: 48, title: "剪刀手爱德华", titleEn: "Edward Scissorhands", rating: 8.7, year: 1990, poster: posterUrl("Edward Scissorhands"), conflict: "一个双手为剪刀的人造人爱上了女孩，却无法拥抱她。", recommendation: "他无法触碰世界，却比任何人都温柔。", genre: "爱情 / 奇幻", tags: ["爱情", "奇幻", "文艺"] },
  { id: 49, title: "你的名字", titleEn: "Your Name", rating: 8.4, year: 2016, poster: posterUrl("Your Name"), conflict: "两个素未谋面的人在梦中交换了身体和命运，醒来后拼命寻找彼此。", recommendation: "你的名字是什么？为什么我会哭？", genre: "爱情 / 动画", tags: ["爱情", "动画", "奇幻"] },
  { id: 50, title: "侧耳倾听", titleEn: "Whisper of the Heart", rating: 8.9, year: 1995, poster: posterUrl("Whisper of the Heart"), conflict: "一个爱看书的女孩发现借书卡上总有同一个名字，由此开始追寻梦想与爱情。", recommendation: "为了喜欢的人，想变成更好的自己。", genre: "爱情 / 动画", tags: ["爱情", "动画", "治愈", "青春"] },
  { id: 51, title: "假如爱有天意", titleEn: "Il Mare", rating: 8.3, year: 2000, poster: posterUrl("Il Mare"), conflict: "一对相隔时空的恋人通过信箱传情，却无法跨越命运的安排。", recommendation: "最远的距离，不是空间，是时间。", genre: "爱情 / 奇幻", tags: ["爱情", "奇幻"] },
  { id: 52, title: "一天", titleEn: "One Day", rating: 7.8, year: 2011, poster: posterUrl("One Day 2011 movie"), conflict: "两个好友在每年的同一天相遇，爱情在错过中慢慢生长。", recommendation: "我们用了二十年，才学会说那句话。", genre: "爱情 / 剧情", tags: ["爱情", "剧情"] },
  { id: 53, title: "志明与春娇", titleEn: "Love in a Puff", rating: 7.9, year: 2010, poster: posterUrl("Love in a Puff"), conflict: "两个烟友在后巷相遇相爱，都市男女的感情既甜蜜又脆弱。", recommendation: "最好的爱情，开始于一根烟的距离。", genre: "爱情 / 喜剧", tags: ["爱情", "喜剧"] },
  { id: 54, title: "了不起的盖茨比", titleEn: "The Great Gatsby", rating: 7.8, year: 2013, poster: posterUrl("The Great Gatsby"), conflict: "一个暴富者为旧爱重建了一座金碧辉煌的幻梦，注定坍塌。", recommendation: "我们不停划桨，逆流而上，却被不断推回过去。", genre: "爱情 / 剧情", tags: ["爱情", "剧情", "文艺", "经典"] },
  { id: 55, title: "重庆森林", titleEn: "Chungking Express", rating: 8.7, year: 1994, poster: posterUrl("Chungking Express"), conflict: "两段擦肩而过的都市爱情，孤独与渴望在罐头的保质期里到期。", recommendation: "每个人心里都有一罐过期的凤梨罐头。", genre: "爱情 / 文艺", tags: ["爱情", "文艺", "经典"] },

  // ===== 动作片 (15部) =====
  { id: 56, title: "蝙蝠侠：黑暗骑士", titleEn: "The Dark Knight", rating: 9.2, year: 2008, poster: posterUrl("The Dark Knight"), conflict: "蝙蝠侠面对不讲规则的小丑，发现正义的代价远比想象沉重。", recommendation: "要么作为英雄死去，要么活到变成恶棍。", genre: "动作 / 犯罪", tags: ["动作", "犯罪", "经典"] },
  { id: 57, title: "疯狂的麦克斯4：狂暴之路", titleEn: "Mad Max Fury Road", rating: 8.5, year: 2015, poster: posterUrl("Mad Max Fury Road"), conflict: "末日废土上一场永不停歇的逃亡与追击，为了自由不惜一切。", recommendation: "整部电影就是一脚踩死的油门。", genre: "动作 / 科幻", tags: ["动作", "科幻", "公路"] },
  { id: 58, title: "谍影重重", titleEn: "The Bourne Identity", rating: 8.6, year: 2002, poster: posterUrl("The Bourne Identity"), conflict: "一个失忆的特工在追杀中拼凑自己的身份，真相比噩梦更可怕。", recommendation: "忘了自己是谁，但身体记得怎么战斗。", genre: "动作 / 惊悚", tags: ["动作", "惊悚"] },
  { id: 59, title: "这个杀手不太冷", titleEn: "Leon The Professional", rating: 9.4, year: 1994, poster: posterUrl("Leon The Professional"), conflict: "一个冷酷杀手收留了一个复仇少女，杀戮中长出了柔软。", recommendation: "人生总是如此艰难，还是只有小时候这样？", genre: "动作 / 剧情", tags: ["动作", "剧情", "经典"] },
  { id: 60, title: "碟中谍6：全面瓦解", titleEn: "Mission Impossible Fallout", rating: 8.2, year: 2018, poster: posterUrl("Mission Impossible Fallout"), conflict: "特工伊森在拯救世界的任务中，不得不在使命与同伴间做出抉择。", recommendation: "他一直在跑，因为世界一直在塌。", genre: "动作 / 冒险", tags: ["动作", "冒险"] },
  { id: 61, title: "速度与激情5", titleEn: "Fast Five", rating: 8.0, year: 2011, poster: posterUrl("Fast Five"), conflict: "亡命之徒组建最强团队劫取毒枭的金库，荷尔蒙炸裂。", recommendation: "没什么问题是一脚油门解决不了的。", genre: "动作 / 犯罪", tags: ["动作", "犯罪", "公路"] },
  { id: 62, title: "突袭", titleEn: "The Raid", rating: 8.1, year: 2011, poster: posterUrl("The Raid"), conflict: "一队特警闯入犯罪大楼，每上一层都是一场近身搏命。", recommendation: "纯粹到极致的暴力美学。", genre: "动作", tags: ["动作"] },
  { id: 63, title: "黑客帝国", titleEn: "The Matrix", rating: 9.1, year: 1999, poster: posterUrl("The Matrix"), conflict: "一个程序员发现现实世界是虚拟的，必须在红蓝药丸间做出选择。", recommendation: "欢迎来到真实的荒漠。", genre: "动作 / 科幻", tags: ["动作", "科幻", "经典"] },
  { id: 64, title: "杀死比尔", titleEn: "Kill Bill Vol 1", rating: 8.2, year: 2003, poster: posterUrl("Kill Bill Vol 1"), conflict: "新娘从昏迷中醒来，踏上对昔日同伴逐一复仇的血腥之路。", recommendation: "复仇是一道要慢慢品的冷菜。", genre: "动作", tags: ["动作", "犯罪"] },
  { id: 65, title: "英雄", titleEn: "Hero 2002 Zhang Yimou", rating: 8.0, year: 2002, poster: posterUrl("Hero 2002 Zhang Yimou"), conflict: "一个刺客十步之内要杀秦王，却在剑下选择了天下苍生。", recommendation: "最大的武功，是放下手中的剑。", genre: "动作 / 武侠", tags: ["动作", "武侠", "文艺"] },
  { id: 66, title: "飓风营救", titleEn: "Taken", rating: 8.0, year: 2008, poster: posterUrl("Taken 2008 movie"), conflict: "退役特工的女儿被绑架，他用暴力重新定义了父爱的边界。", recommendation: "我会找到你，然后杀了你。", genre: "动作 / 惊悚", tags: ["动作", "惊悚"] },
  { id: 67, title: "勇闯夺命岛", titleEn: "The Rock", rating: 8.6, year: 1996, poster: posterUrl("The Rock 1996 movie"), conflict: "一个化学武器专家和一个老逃犯联手潜入恶魔岛，拯救人质。", recommendation: "英雄不一定完美，但关键时刻绝不退缩。", genre: "动作 / 冒险", tags: ["动作", "冒险"] },
  { id: 68, title: "叶问", titleEn: "Ip Man", rating: 8.1, year: 2008, poster: posterUrl("Ip Man"), conflict: "一代武学宗师在日军铁蹄下用拳头捍卫中国人的尊严。", recommendation: "我要打十个。", genre: "动作 / 传记", tags: ["动作", "传记", "武侠"] },
  { id: 69, title: "角斗士", titleEn: "Gladiator", rating: 8.5, year: 2000, poster: posterUrl("Gladiator"), conflict: "一个被贬为奴的将军在竞技场上向篡位的暴君复仇。", recommendation: "你所做的一切，将在永恒中回响。", genre: "动作 / 历史", tags: ["动作", "历史", "经典"] },
  { id: 70, title: "战狼2", titleEn: "Wolf Warrior 2", rating: 7.4, year: 2017, poster: posterUrl("Wolf Warrior 2"), conflict: "退役军人在非洲战乱中孤身拯救同胞，热血与使命交织。", recommendation: "犯我中华者，虽远必诛。", genre: "动作", tags: ["动作"] },

  // ===== 科幻片 (15部) =====
  { id: 71, title: "星际穿越", titleEn: "Interstellar", rating: 9.4, year: 2014, poster: posterUrl("Interstellar"), conflict: "一个父亲穿越虫洞拯救人类，时间的代价是错过女儿的一生。", recommendation: "爱是唯一可以跨越维度的力量。", genre: "科幻 / 冒险", tags: ["科幻", "冒险", "剧情"] },
  { id: 72, title: "盗梦空间", titleEn: "Inception", rating: 9.3, year: 2010, poster: posterUrl("Inception"), conflict: "一个能潜入他人梦境的盗贼，在虚幻与现实之间迷失了归途。", recommendation: "那个陀螺到底停了没有？", genre: "科幻 / 动作", tags: ["科幻", "动作", "惊悚"] },
  { id: 73, title: "2001太空漫游", titleEn: "2001 A Space Odyssey", rating: 8.8, year: 1968, poster: posterUrl("2001 A Space Odyssey"), conflict: "人类在太空中遭遇超级AI的反叛，文明的进化还是终结？", recommendation: "看不懂没关系，你只需要感受那份震撼。", genre: "科幻", tags: ["科幻", "经典"] },
  { id: 74, title: "银翼杀手2049", titleEn: "Blade Runner 2049", rating: 8.3, year: 2017, poster: posterUrl("Blade Runner 2049"), conflict: "一个复制人猎手发现了一个能颠覆人类与复制人秩序的秘密。", recommendation: "你的记忆是真的，但你可能不是。", genre: "科幻 / 剧情", tags: ["科幻", "剧情", "文艺"] },
  { id: 75, title: "降临", titleEn: "Arrival", rating: 8.3, year: 2016, poster: posterUrl("Arrival 2016 movie"), conflict: "语言学家与外星人沟通时获得了预见未来的能力，却无法改变结局。", recommendation: "如果你能看到未来的悲伤，你还会出发吗？", genre: "科幻 / 剧情", tags: ["科幻", "剧情"] },
  { id: 76, title: "流浪地球", titleEn: "The Wandering Earth", rating: 7.9, year: 2019, poster: posterUrl("The Wandering Earth"), conflict: "太阳即将毁灭，人类决定带着地球一起逃离太阳系。", recommendation: "带着家一起流浪，这就是中国式浪漫。", genre: "科幻 / 冒险", tags: ["科幻", "冒险", "动作"] },
  { id: 77, title: "火星救援", titleEn: "The Martian", rating: 8.4, year: 2015, poster: posterUrl("The Martian"), conflict: "被遗弃在火星上的宇航员用土豆和科学拯救了自己。", recommendation: "在火星种土豆，是理科生最浪漫的事。", genre: "科幻 / 冒险", tags: ["科幻", "冒险", "喜剧"] },
  { id: 78, title: "月球", titleEn: "Moon", rating: 8.5, year: 2009, poster: posterUrl("Moon 2009 movie"), conflict: "月球基地上的孤独矿工发现了关于自身存在的惊人真相。", recommendation: "最可怕的孤独，是连自己都不是真的。", genre: "科幻 / 悬疑", tags: ["科幻", "悬疑"] },
  { id: 79, title: "她", titleEn: "Her", rating: 8.5, year: 2013, poster: posterUrl("Her 2013 movie"), conflict: "一个孤独男人爱上了AI，在虚拟与现实之间寻找真实的连接。", recommendation: "你能爱上一个声音吗？答案是：你已经爱了。", genre: "科幻 / 爱情", tags: ["科幻", "爱情", "文艺"] },
  { id: 80, title: "机器人总动员", titleEn: "WALL-E", rating: 9.3, year: 2008, poster: posterUrl("WALL-E"), conflict: "一个垃圾清理机器人在废弃的地球上等到了爱情和希望。", recommendation: "他捡了全世界的垃圾，却只想牵你的手。", genre: "科幻 / 动画", tags: ["科幻", "动画", "爱情", "治愈"] },
  { id: 81, title: "第九区", titleEn: "District 9", rating: 8.2, year: 2009, poster: posterUrl("District 9"), conflict: "外星难民被隔离在贫民窟，一个人类官员意外变异后站在了他们那边。", recommendation: "种族隔离的镜子，这次照的是全人类。", genre: "科幻 / 动作", tags: ["科幻", "动作"] },
  { id: 82, title: "源代码", titleEn: "Source Code", rating: 8.4, year: 2011, poster: posterUrl("Source Code"), conflict: "一个军人被反复送入爆炸前8分钟的列车，寻找炸弹客的真实身份。", recommendation: "八分钟够不够爱上一个人？够了。", genre: "科幻 / 悬疑", tags: ["科幻", "悬疑", "动作"] },
  { id: 83, title: "异形", titleEn: "Alien", rating: 8.5, year: 1979, poster: posterUrl("Alien 1979 movie"), conflict: "一艘太空商船上的船员发现了致命的外星生物，无人可信。", recommendation: "在太空中，没人能听到你的尖叫。", genre: "科幻 / 恐怖", tags: ["科幻", "恐怖", "经典"] },
  { id: 84, title: "前目的地", titleEn: "Predestination", rating: 8.2, year: 2014, poster: posterUrl("Predestination"), conflict: "一个时间旅行者追踪连环炸弹客，最终发现一切都是自己。", recommendation: "你是自己的起点，也是自己的终点。", genre: "科幻 / 悬疑", tags: ["科幻", "悬疑"] },
  { id: 85, title: "头号玩家", titleEn: "Ready Player One", rating: 8.7, year: 2018, poster: posterUrl("Ready Player One"), conflict: "在虚拟世界里寻找彩蛋的少年，发现现实才是唯一值得赢的游戏。", recommendation: "现实很糟，但只有现实是真的。", genre: "科幻 / 冒险", tags: ["科幻", "冒险", "动作"] },

  // ===== 动画片 (15部) =====
  { id: 86, title: "千与千寻", titleEn: "Spirited Away", rating: 9.4, year: 2001, poster: posterUrl("Spirited Away"), conflict: "一个小女孩误入神灵世界，必须找回自己的名字才能回家。", recommendation: "不要忘记自己的名字。", genre: "动画 / 奇幻", tags: ["动画", "奇幻", "治愈", "经典"] },
  { id: 87, title: "龙猫", titleEn: "My Neighbor Totoro", rating: 9.2, year: 1988, poster: posterUrl("My Neighbor Totoro"), conflict: "搬到乡下的姐妹在森林里遇见了只有纯真之心才能看到的龙猫。", recommendation: "童年的那片森林，永远在等你回来。", genre: "动画 / 奇幻", tags: ["动画", "奇幻", "治愈"] },
  { id: 88, title: "寻梦环游记", titleEn: "Coco", rating: 9.1, year: 2017, poster: posterUrl("Coco"), conflict: "一个追求音乐梦的男孩进入亡灵世界，发现被遗忘才是真正的死亡。", recommendation: "真正的死亡，是世界上再没有人记得你。", genre: "动画 / 奇幻", tags: ["动画", "奇幻", "亲情", "治愈"] },
  { id: 89, title: "飞屋环游记", titleEn: "Up", rating: 9.0, year: 2009, poster: posterUrl("Up Pixar movie"), conflict: "一个老人用气球带着房子飞向天堂瀑布，完成亡妻未了的心愿。", recommendation: "前十分钟，就是一生。", genre: "动画 / 冒险", tags: ["动画", "冒险", "治愈", "亲情"] },
  { id: 90, title: "头脑特工队", titleEn: "Inside Out", rating: 8.7, year: 2015, poster: posterUrl("Inside Out"), conflict: "一个小女孩大脑里的五种情绪互相争夺控制权，悲伤原来也很重要。", recommendation: "允许自己悲伤，才是真正的成长。", genre: "动画 / 奇幻", tags: ["动画", "奇幻", "治愈"] },
  { id: 91, title: "天空之城", titleEn: "Castle in the Sky", rating: 9.1, year: 1986, poster: posterUrl("Castle in the Sky"), conflict: "两个少年寻找传说中的天空之城，却发现力量的尽头是毁灭。", recommendation: "不管你拥有多强大的武器，离开了土地就没法生存。", genre: "动画 / 冒险", tags: ["动画", "冒险", "奇幻"] },
  { id: 92, title: "狮子王", titleEn: "The Lion King", rating: 9.0, year: 1994, poster: posterUrl("The Lion King"), conflict: "小狮子在父亲被害后流亡，最终回归承担起王者的责任。", recommendation: "记住你是谁。", genre: "动画 / 冒险", tags: ["动画", "冒险", "经典"] },
  { id: 93, title: "哈尔的移动城堡", titleEn: "Howls Moving Castle", rating: 9.0, year: 2004, poster: posterUrl("Howls Moving Castle"), conflict: "被变成老太婆的少女闯入了一个怯懦魔法师的移动城堡。", recommendation: "心是你最强大的魔法。", genre: "动画 / 奇幻", tags: ["动画", "奇幻", "爱情"] },
  { id: 94, title: "超能陆战队", titleEn: "Big Hero 6", rating: 8.7, year: 2014, poster: posterUrl("Big Hero 6"), conflict: "一个天才少年和充气机器人大白结成搭档，为哥哥的死寻找真相。", recommendation: "你满意你现在的护理了吗？", genre: "动画 / 科幻", tags: ["动画", "科幻", "治愈"] },
  { id: 95, title: "攻壳机动队", titleEn: "Ghost in the Shell", rating: 8.9, year: 1995, poster: posterUrl("Ghost in the Shell"), conflict: "义体化的女警在追捕黑客时，开始质疑自己是否还是人类。", recommendation: "当一切都能被替换，什么才是真正的自我？", genre: "动画 / 科幻", tags: ["动画", "科幻", "经典"] },
  { id: 96, title: "红辣椒", titleEn: "Paprika", rating: 8.8, year: 2006, poster: posterUrl("Paprika"), conflict: "能进入他人梦境的装置被盗，现实与梦境的边界开始崩塌。", recommendation: "梦是没有颜色的，还是颜色就是梦本身？", genre: "动画 / 科幻", tags: ["动画", "科幻", "奇幻"] },
  { id: 97, title: "玩具总动员3", titleEn: "Toy Story 3", rating: 8.8, year: 2010, poster: posterUrl("Toy Story 3"), conflict: "被主人丢弃的玩具们面临被销毁的命运，友谊在告别中升华。", recommendation: "再见不是遗忘，是带着爱长大。", genre: "动画 / 冒险", tags: ["动画", "冒险", "治愈"] },
  { id: 98, title: "风之谷", titleEn: "Nausicaa of the Valley of the Wind", rating: 8.8, year: 1984, poster: posterUrl("Nausicaa of the Valley of the Wind"), conflict: "末日后的公主试图阻止人类与自然之间的战争，用生命换来和平。", recommendation: "她不是在拯救世界，她在拥抱它。", genre: "动画 / 科幻", tags: ["动画", "科幻", "冒险"] },
  { id: 99, title: "秒速五厘米", titleEn: "5 Centimeters per Second", rating: 8.3, year: 2007, poster: posterUrl("5 Centimeters per Second"), conflict: "青梅竹马被距离拉开，初恋在时间中逐渐变成一道回不去的风景。", recommendation: "樱花落下的速度，就是我们渐行渐远的速度。", genre: "动画 / 爱情", tags: ["动画", "爱情", "文艺"] },
  { id: 100, title: "萤火虫之墓", titleEn: "Grave of the Fireflies", rating: 8.7, year: 1988, poster: posterUrl("Grave of the Fireflies"), conflict: "战争中失去一切的兄妹在饥饿与绝望中互相依偎直到终点。", recommendation: "看完之后你会沉默很久，然后珍惜眼前人。", genre: "动画 / 剧情", tags: ["动画", "剧情", "历史"] },
];
