# Gerouge photographic transformation — first review phase

The existing project is preserved. This release transforms the plantation approach, grand entrance hall, and the detailed Headmistress's Study investigation. It does not claim that the remaining world has been transformed.

## Inventory and scope

`location-inventory.json` contains 91 playable scene entries, including overlapping modes that revisit the same physical places. These are entries, not 91 different physical buildings. The complete list is searchable in the in-game Estate map.

- Original campaign: 42 hidden-evidence rooms, eight estate-investigation rooms, eight chapel-route stops, four final-dossier scenes, and six county activity destinations.
- Existing expansions: five Unsealed Rooms, five School Day rooms, three Evidence After Dark rooms, and six Cinematic Hall rooms.
- Detailed and alternate study chapters: two entries, with separate existing saves.
- Photographic approach and entrance hall: two new route entries.

The original campaign already contained the Nevermore County / Nevermore Academy names. Those existing names were retained as requested; no story, character, progress, code, or imagery was imported from the separate Nevermore Chronicles project. Its stylesheet was read only to understand the requested visual reference.

## Ready for review

- Fictional photographic scenes: locally packaged, individually composed approach, hall, and study. Cream plaster, walnut furnishings, green shutters, blue dusk, and warm lamps connect the locations.
- Hotspots align with furniture in the actual generated images. They retain their coordinates on desktop and mobile. Phones pan the scene horizontally rather than cropping objects away; landscape orientation gives a broader view.
- Entrance: front-door travel, estate plaque, seven ribbons, collectible storm lantern.
- Hall: portrait backing, latched console drawer, key and note, flower-table ribbon, bell rope, study door.
- Study: desk latch, individually searchable drawer contents and false lining, inventory key selection, cabinet lock and false shelf, Mara's diary, Eva's photograph, paper restoration using touch/click or drag/drop, controllable lamp shutter, control/sample pigment comparison, Maeve's evidence-based interview, historical comparison, and both existing release decisions.
- Estate map, inventory, objectives, field journal, labels, optional synthesized sound, fullscreen when supported, autosave, backup export, and validated backup restore.
- Every old chapter remains reachable. The earlier detailed-study presentation is retained at `study-reimagined-original.html`; the familiar `study-reimagined.html` address now opens the photographic study using the same save.

## Save preservation

Publication stays on `https://the-hollowing-gerouge.onrender.com`. Browser saves depend on that origin. Existing keys remain: `nevermore-v1`, `hollowing-cinematic-hall-v1`, `hollowing-estate-expansion-v1`, `hollowing-daily-life-v1`, `hollowing-evidence-after-dark-v1`, `hollowing-study-interactive-v1`, and `hollowing-photostudy-v1`. New scene navigation and equipment state use `hollowing-immersive-v1`.

The historical `nevermore-v1` key belongs to this existing Gerouge code. It is not read from another website. Chapter saves are not merged into another game's story. Existing unknown fields are retained when the transformed study saves. Export backs up all known Gerouge chapter keys. Import asks before replacing the included saves and rejects unsupported files.

## Unfinished and next passes

All locations outside the three photographic scenes still use their original visuals and interactions. Some original modes still depend on remote images or use illustrated scenes. They are preserved, visibly marked as awaiting photographic transformation, and remain playable. No replacement scenery is presented as complete for those rooms.

Suggested progression after reviewing this phase:

1. Finishing-school classroom, seven-bed dormitory, nursery, music hall, and registrar's office.
2. Greenhouse, rose garden, workshop, carriage house, and gatehouse.
3. Chapel, vestry, sealed stair, underground vault and passage, tower, and final-dossier rooms.
4. All remaining case and activity locations, with one appropriate scene and individually aligned interactions per location.

The lamp changes scene exposure and keeps its state. Its photographic base plate still depicts a lit lamp. Drawer and paper close-ups are interactive reconstructed views, not additional photographic renders. An existing Evidence After Dark indexing error was also corrected so recovered objects display their story descriptions instead of their vertical coordinates. Character conversations are readable dialogs; there are no animated characters or first-person walking controls in this phase. The optional sound control plays synthesized bell tones, not a full ambient soundscape.

## Verification

`tests/gameplay.cjs` uses Playwright and Chromium to exercise the full study chain, reject incorrect paper order and incomplete pigment preparation, select both endings, reload saves, export a backup, preserve existing study fields and the original campaign save, recover from malformed JSON, open original routes, search the 91-entry map, and use touch navigation and drawers on a 390px phone viewport. A second compatibility check exercises backup restore, invalid-file rejection, all 91 route entries, and the export fallback when browser storage is unavailable. No browser JavaScript errors were observed. All local image plates loaded. Scene widths and tap targets were checked on mobile; the mobile drawer overlap found during testing was corrected.

Run in a local HTTP preview with `node tests/gameplay.cjs` when Playwright and Chromium are available. The test expects `http://127.0.0.1:4173`. Run `node scripts/inventory.cjs` to regenerate the scene inventory.
