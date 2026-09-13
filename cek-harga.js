const fs = require('fs');
const modal = JSON.parse(fs.readFileSync('modal.json','utf8'));
let result = { last_update: new Date().toLocaleString('id-ID',{timeZone:'Asia/Jakarta'}), products: [] };
function hitung(m){ return Math.ceil(m*1.1); }
['ml','pubg','roblox'].forEach(game=>{
  modal[game].forEach(item=>{
    result.products.push({game:game, name:item.name, modal:item.modal, jual:hitung(item.modal), untung:hitung(item.modal)-item.modal});
  });
});
fs.writeFileSync('harga-jual.json', JSON.stringify(result, null, 2));
console.log('Bot RFK selesai update harga +10%');
