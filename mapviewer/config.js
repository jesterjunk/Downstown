function Config() {}
var config = new Config();
config.size = 32;
config.step = 256;
config.x = 4096;
config.y = 4096;
config.mode = "3d";
config.showDeedBordersIn3dMode = false;
config.showDeedBordersInFlatMode = true;

function Deed(name, x, y, height, permanent, sx, sy, ex, ey) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.ex = ex;
	this.ey = ey;
	this.height = height;
	this.permanent = permanent;
}

function FocusZone(name, x, y, height, type, sx, sy, ex, ey) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.ex = ex;
	this.ey = ey;
	this.height = height;
	this.type = type;
}

var deeds = [];
var focusZones = [];
deeds.push(new Deed('Alysium', 4099, 4106, 301, false, 4059, 4040, 4139, 4157));
deeds.push(new Deed('Lost', 7244, 7591, 84, false, 7219, 7566, 7273, 7626));
deeds.push(new Deed('Serenity Bay', 5344, 6763, 64, false, 5319, 6738, 5369, 6788));
deeds.push(new Deed('Marblehead', 5708, 3594, 156, false, 5668, 3564, 5738, 3629));
deeds.push(new Deed('Mooseknuckle', 2012, 963, 96, false, 2002, 957, 2030, 983));
deeds.push(new Deed('This Place', 359, 483, 2017, false, 339, 463, 379, 503));
deeds.push(new Deed('Aurora Skies', 594, 808, 65, false, 543, 757, 645, 859));
deeds.push(new Deed('The Dragon\'s Maw', 958, 1368, 79, false, 948, 1345, 968, 1378));
deeds.push(new Deed('Ankh-morpork', 1689, 654, 182, false, 1674, 649, 1739, 704));
deeds.push(new Deed('Cedar Nook', 4085, 4405, 71, false, 4055, 4393, 4097, 4417));
deeds.push(new Deed('Rivendell', 4553, 5339, 64, false, 4538, 5324, 4568, 5354));
deeds.push(new Deed('Silver Mountain', 1280, 1225, 3620, false, 1260, 1205, 1300, 1245));
deeds.push(new Deed('Port Al', 4570, 3426, 306, false, 4550, 3406, 4590, 3446));
deeds.push(new Deed('City Of Dragon Tail Ridge', 2295, 1075, 1749, false, 2290, 1070, 2300, 1080));
deeds.push(new Deed('Cresta', 4004, 4646, 2, false, 3990, 4606, 4010, 4654));
deeds.push(new Deed('The Shivering Isle', 5733, 3943, 83, false, 5726, 3936, 5740, 3950));
deeds.push(new Deed('New Independence', 5752, 5692, 64, false, 5737, 5677, 5777, 5722));
deeds.push(new Deed('Veggiefruit', 3264, 5711, 27, false, 3239, 5686, 3289, 5736));
deeds.push(new Deed('Hungary', 4015, 4866, 511, false, 3975, 4806, 4039, 4906));
deeds.push(new Deed('The Little Valley Ranch', 6371, 2151, 59, false, 6356, 2136, 6386, 2181));
deeds.push(new Deed('Midgard', 4244, 3092, 78, false, 4234, 3077, 4254, 3099));
deeds.push(new Deed('Wild Goose Landing', 4629, 3562, 67, false, 4613, 3546, 4645, 3578));
deeds.push(new Deed('Kosmo Company', 5214, 2757, 55, false, 5199, 2742, 5229, 2777));
deeds.push(new Deed('Scoot Kingdom', 4038, 4063, 95, false, 4023, 4048, 4048, 4077));
deeds.push(new Deed('Who Cares', 3716, 2137, 7, false, 3706, 2121, 3726, 2153));
deeds.push(new Deed('Dunville', 3979, 5228, 36, false, 3929, 5188, 3994, 5278));
deeds.push(new Deed('River Stowaway', 3674, 4252, 67, false, 3656, 4245, 3693, 4264));
deeds.push(new Deed('Blasphemy Bay', 4163, 4223, 33, false, 4158, 4218, 4168, 4228));
deeds.push(new Deed('Misty Evening', 4826, 4706, 1812, false, 4821, 4701, 4831, 4711));
deeds.push(new Deed('The Boomerang Point', 4911, 4322, 2836, false, 4901, 4312, 4921, 4332));
deeds.push(new Deed('Wayne\'s Market And House Of Peace', 4407, 4234, 815, false, 4402, 4229, 4412, 4239));
deeds.push(new Deed('Winterfell', 3396, 478, 161, false, 3342, 441, 3416, 515));
deeds.push(new Deed('Solitude', 3743, 5570, 58, false, 3733, 5506, 3753, 5580));
deeds.push(new Deed('Downstown', 4055, 4648, 31, false, 4040, 4633, 4070, 4663));
deeds.push(new Deed('Hawks Nest', 549, 5967, 441, false, 524, 5942, 574, 5992));
deeds.push(new Deed('Tanstaafl', 4603, 4507, 412, false, 4588, 4482, 4628, 4522));
deeds.push(new Deed('Twisted Branch Land And Livestock', 6819, 3406, 72, false, 6809, 3396, 6829, 3416));
deeds.push(new Deed('Simplicity', 4163, 4023, 64, false, 4154, 4014, 4169, 4028));
deeds.push(new Deed('The Lighthouse', 3090, 4138, 59, false, 3075, 4128, 3136, 4152));
deeds.push(new Deed('Fortuna', 2640, 4921, 108, false, 2630, 4911, 2650, 4933));
deeds.push(new Deed('Misty Mine', 7207, 6365, 443, false, 7202, 6355, 7252, 6405));
deeds.push(new Deed('Grimshire Mines', 4933, 2173, 153, false, 4927, 2167, 4939, 2179));
deeds.push(new Deed('The Riverlands - Resources And Holdings', 7043, 3541, 47, false, 7030, 3514, 7058, 3550));
deeds.push(new Deed('Ravenwood', 4653, 5028, 59, false, 4638, 5018, 4668, 5038));
deeds.push(new Deed('Port Adelaide', 2084, 1318, 26, false, 2072, 1301, 2104, 1338));
deeds.push(new Deed('Firefly Lake', 1188, 6625, 72, false, 1163, 6590, 1208, 6640));
deeds.push(new Deed('Hillsbrad Foothill', 4139, 4863, 365, false, 4127, 4848, 4151, 4878));
deeds.push(new Deed('Dewdrop Monastery', 3979, 4398, 75, false, 3967, 4393, 3984, 4403));
deeds.push(new Deed('Baybuck', 6889, 4895, 79, false, 6869, 4875, 6904, 4915));
deeds.push(new Deed('Willoughby', 3007, 8064, 65, false, 2992, 8049, 3022, 8079));
deeds.push(new Deed('Chateau Ephy', 1458, 7061, 112, false, 1443, 7046, 1473, 7076));
deeds.push(new Deed('Woods Of Cedar', 3406, 6335, 212, false, 3386, 6310, 3492, 6360));
deeds.push(new Deed('Lake View Manor', 4293, 5281, 34, false, 4285, 5276, 4298, 5297));
deeds.push(new Deed('Jewel Bay', 1613, 5344, 76, false, 1588, 5319, 1638, 5369));
deeds.push(new Deed('Shady Rest', 1237, 3562, 10, false, 1224, 3551, 1247, 3575));
deeds.push(new Deed('Gremsbal', 4050, 4593, 70, false, 4040, 4573, 4060, 4598));
deeds.push(new Deed('Green Town', 6853, 2448, 80, false, 6848, 2443, 6858, 2453));
deeds.push(new Deed('Misty Lake', 2079, 7361, 89, false, 2056, 7323, 2110, 7371));
deeds.push(new Deed('Krusty Shallows', 5452, 7648, 5, false, 5445, 7638, 5464, 7658));
deeds.push(new Deed('Watercrest', 3832, 6282, 99, false, 3807, 6257, 3857, 6307));
deeds.push(new Deed('Zilch', 4360, 4600, 320, false, 4305, 4510, 4415, 4620));
deeds.push(new Deed('Ocean Eye', 481, 4150, 414, false, 476, 4145, 486, 4155));
deeds.push(new Deed('Buterpond Il', 4572, 5064, 63, false, 4567, 5053, 4583, 5069));
deeds.push(new Deed('Villa De La Luz', 5312, 4845, 58, false, 5292, 4825, 5332, 4865));
deeds.push(new Deed('Stormfall', 3933, 4820, 491, false, 3913, 4800, 3953, 4840));
focusZones.push(new FocusZone('Halo Pointe', 1027, 192, 2, 3, 1012, 177, 1042, 207));
focusZones.push(new FocusZone('Roundtop Ridge', 311, 389, 2390, 3, 111, 189, 511, 589));
focusZones.push(new FocusZone('Dragon\'s Head Peak', 1262, 1306, 2737, 3, 1062, 1106, 1462, 1506));
focusZones.push(new FocusZone('Dragon Tail Ridge', 2282, 1129, 1888, 3, 2082, 929, 2482, 1329));
focusZones.push(new FocusZone('Dragon\'s Rest', 1618, 631, 1607, 3, 1468, 481, 1768, 781));
focusZones.push(new FocusZone('Nolake Lake', 1783, 1155, 54, 3, 1683, 1055, 1883, 1255));
focusZones.push(new FocusZone('Hipbone Point', 1775, 1331, 963, 3, 1700, 1256, 1850, 1406));
focusZones.push(new FocusZone('Horseshoe Island', 3072, 6400, 2203, 3, 2572, 5900, 3572, 6900));
focusZones.push(new FocusZone('Dragonback Reach', 1660, 966, 3568, 3, 1560, 866, 1760, 1066));
focusZones.push(new FocusZone('The Rift', 1534, 6395, 255, 12, 1484, 6345, 1584, 6445));
