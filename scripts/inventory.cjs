const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync('game.js','utf8');
const read=(name)=>{let start=src.indexOf('const '+name+'=')+('const '+name+'=').length;let end=src.indexOf('];',start);return vm.runInNewContext('('+src.slice(start,end+1)+')')};
const rows=[];const add=(group,id,name,url,detail,status='Original playable route · photographic upgrade pending')=>rows.push({group,id,name,url,detail,status});
for(const x of read('searchScenes'))add('Original campaign · '+x.caseName,x.id,x.title,'original-case-archive.html?screen=search-room&room='+x.id,x.items.join(', '));
for(const x of read('estateRooms'))add('Original estate investigation',x.id,x.name,'original-case-archive.html?screen=estate&room='+x.id,x.objects.map(o=>o[0]).join(', '));
for(const x of read('chapelStops'))add('Chapel investigation',x.id,x.place,'original-case-archive.html?screen=chapel&room='+x.id,x.title);
for(const [i,x] of read('finaleScenes').entries())add('Final dossier',String(i),x.name,'original-case-archive.html?screen=finale&room='+i,x.items.map(o=>o[0]).join(', '));
for(const x of read('venues'))add('County activities',x[0],x[2],'original-case-archive.html?screen=venue&room='+x[0],x[3]);
const other=[['Unsealed Rooms','estate-exploration.html','rooms'],['School Day','plantation-day.html','rooms'],['Evidence After Dark','evidence-after-dark.html','locations'],['Cinematic Hall','cinematic-hall.html','rooms']];
for(const [group,file,name] of other){const s=fs.readFileSync(file==='plantation-day.html'?'school-wing.js':file,'utf8');const start=s.indexOf(name+'={')+name.length+1;let end=s.indexOf('\n};',start);if(end<0)end=s.indexOf('};',start);else end++; const ob=vm.runInNewContext('('+s.slice(start,end+1).trimEnd()+')');for(const [id,r] of Object.entries(ob))add(group,id,r.name||r.title,file+'?room='+id,r.intro||r.desc||(r.actions||[]).map(a=>a[0]).join(', '),group==='School Day'?'Photographic scene and aligned interactions · school-wing upgrade':undefined);}
add('Detailed study','study','Headmistress’s Study — transfer order investigation','?scene=study','Drawer latch, numbered key, book cabinet, Mara’s diary, Eva’s portrait, document restoration, pigment analysis, Maeve interview, evidence board, two endings','Photographic scene and aligned interactions · phase one');
add('Alternate study chapter','study-interactive','Headmistress’s Study — original interactive chapter','headmistress-study.html','Original separate clues, relationships and save retained');
add('Photographic route','approach','Gerouge Plantation approach','?scene=approach','Estate plaque, violet ribbons, storm lantern and front doors','Photographic scene and aligned interactions · phase one');
add('Photographic route','hall','Grand Entrance Hall','?scene=hall','Portrait, console drawer, school note, ribbon, bell rope and study doorway','Photographic scene and aligned interactions · phase one');
fs.writeFileSync('location-inventory.json',JSON.stringify({version:1,scope:'All existing playable scene entries; overlapping chapters retained as separate entries to preserve their progress.',locations:rows},null,2));console.log(rows.length+' location entries inventoried');
