const mcdonalds = {storeName: "McDonalds", location:"100 Hancock St",deliveryFee:2,con:{a:"A",b:"B",c:"C",d:"D"}};
const burgerKing = {storeName: "Burger King", location:"10 Granite St", deliveryFee:2,con:{a:"A",b:"B",c:"C",d:"D"}};
const wendys = {storeName: "Wendys", location:"50 Newport Ave", deliveryFee:2,con:{a:"A",b:"B",c:"C",d:"D"}};
const popeyes = {storeName: "Popeyes", location:"680 Southern Artery", deliveryFee:2,con:{a:"A",b:"B",c:"C",d:"D"}};
const subway = {storeName: "Subway", location:"1800 Morrisey Blvd", deliveryFee:2};
const kfc = {storeName: "KFC", location:"500 Hancock St", deliveryFee:2};
const dunkin = {storeName: "Dunkin", location:"50 Hancock St", deliveryFee:2};
const panera = {storeName: "Panera", location:"200 Hancock St", deliveryFee:2};


const main = [mcdonalds,burgerKing,wendys,popeyes,subway,kfc,dunkin,panera];
for(i=0;i<8;i++){
    console.log(main[i].storeName, " @ ", main[i].location);
}

