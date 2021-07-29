const acfParser = require('./main')
const fs = require('fs')

const testFile = fs.readFileSync('appworkshop_322330.acf', 'utf-8')
const decode = acfParser.decode(testFile)

console.log(JSON.stringify(decode, null, 2))
// {
//   "AppWorkshop": {
//     "appid": "322330",
//     "SizeOnDisk": "3066063023",
//     "NeedsUpdate": "0",
//     "NeedsDownload": "0",
//     "TimeLastUpdated": "1627484699",
//     "TimeLastAppRan": "0",
//     "WorkshopItemsInstalled": {
//       "346968521": {
//         "size": "0",
//         "timeupdated": "1560219401",
//         "manifest": "-1",
//         "ugchandle": "796488803078597442"
//       }
//     },
//     "WorkshopItemDetails": {
//       "346968521": {
//         "manifest": "-1",
//         "ugchandle": "796488803078597442",
//         "timeupdated": "1560219401",
//         "timetouched": "1627482019"
//       }
//     }
//   }
// }

fs.writeFileSync('test.acf', acfParser.encode(decode))

// "AppWorkshop"
// {
// 	"appid"		"322330"
// 	"SizeOnDisk"		"3066063023"
// 	"NeedsUpdate"		"0"
// 	"NeedsDownload"		"0"
// 	"TimeLastUpdated"		"1627484699"
// 	"TimeLastAppRan"		"0"
// 	"WorkshopItemsInstalled"
// 	{
// 		"346968521"
// 		{
// 			"size"		"0"
// 			"timeupdated"		"1560219401"
// 			"manifest"		"-1"
// 			"ugchandle"		"796488803078597442"
// 		}
// 	}
// 	"WorkshopItemDetails"
// 	{
// 		"346968521"
// 		{
// 			"manifest"		"-1"
// 			"ugchandle"		"796488803078597442"
// 			"timeupdated"		"1560219401"
// 			"timetouched"		"1627482019"
// 		}
// 	}
// }
