# Gerouge photographic transformation — current state

The complete existing project, storyline, chapter routes and browser-save keys are retained. The first release transformed the approach, entrance hall and detailed private-study investigation. This continuation gives the school wing its own photographic environment and deeper hands-on interactions, and applies a darker Gothic visual theme across the game.

## Visual direction

Ink-black and bruised-plum surfaces, muted burgundy accents, aged ivory text, cool desaturated photographs, restrained grain and warm practical lights replace the earlier green-and-gold presentation. Cinzel headings/controls and Crimson Pro narrative text are packaged locally with their SIL Open Font License notices. Body text remains large and readable; focus outlines, 44px-or-larger main targets, touch controls, and reduced-motion-safe visuals are retained. The UI does not flash or rely on animation.

Stay Alive (2006) was used as an atmospheric reference at the user's request. The filmmakers' interview describes believable horror and a game world treated with the same care as the film: https://www.darkhorizons.com/william-brent-bell-and-matthew-peterman-for-stay-alive/. Gerouge's existing fiction, mysteries and characters remain its own; no film dialogue, screenshots, characters or plot were imported.

## Photographic rooms ready to play

Seven distinct locally packaged photographic environment plates now support eight playable scene entries:

- Plantation approach: estate plaque, seven ribbons, storm lantern, front doors.
- Entrance hall: portrait backing, latched console drawer, key, school note, ribbon, bell rope and study door.
- Detailed Headmistress's Study: desk latch/false lining, numbered-key inventory use, false shelf/Mara's diary, Eva's photograph, paper restoration, working lamp, pigment controls/comparison, Maeve interview, evidence comparison and both release decisions.
- Finishing-school classroom: student map/landmark arrangement, altered attendance board, practical lesson at teacher's desk.
- North dormitory: latched bedside drawer and warning note, liftable chapel-model roof and concealed passage sketch.
- Rose conservatory: use tools on the pot in the correct propagation order, inspect Mara's violet in the glass case.
- Restoration workshop: cupboard latch/material collection, assemble the lantern by selecting or dragging the correct material to each work area, operate the completed lantern.
- The school-day office is a separate chapter entry in the same established study room. It uses the study plate for its mail tray, parcel/key and lesson ledger.

The school-day storyline retains Eliza, Maeve, lesson choices, the altered roll, the strange parcel, the eighth-bell prerequisites, relationship changes and both original outcomes. Existing completed route flags remain complete; older saves are not made to replay earned work. Paper, garden and drawer close-ups are reconstructed interactive views, not additional photographic renders.

## Complete location inventory

`location-inventory.json` still contains 91 playable scene entries, including overlapping chapter visits to the same places. It is searchable from the in-game Estate map. Five School Day entries are now marked as photographic rather than pending.

The original campaign retains its 42 hidden-evidence rooms, eight estate rooms, eight chapel stops, four final-dossier scenes and six county activity destinations. The original county campaign body and its story data were not changed in this continuation. Other expansions remain accessible. Fonts and colors extend across their existing presentations.

`school-wing.js` holds the existing daily-life chapter logic plus the updated scene interface. `scripts/inventory.cjs` reads its room definitions when regenerating the inventory. `plantation-day.html?room=classroom`, `?room=study`, `?room=dorm`, `?room=greenhouse` and `?room=workshop` remain valid.

## Save preservation

Deployment stays on https://the-hollowing-gerouge.onrender.com, preserving the browser-save origin. The school wing still uses `hollowing-daily-life-v1`; its original lesson, craft, garden, trust, journal, flags and ending fields remain. New latch and lamp flags are additive. Unknown saved fields are retained.

Other keys are unchanged: `nevermore-v1`, `hollowing-cinematic-hall-v1`, `hollowing-estate-expansion-v1`, `hollowing-evidence-after-dark-v1`, `hollowing-study-interactive-v1`, `hollowing-photostudy-v1`, and the navigation key `hollowing-immersive-v1`. The historical `nevermore-v1` name belongs to this pre-existing Gerouge project. It does not access the separate Nevermore Chronicles website.

The school wing can export a backup compatible with the main game's importer, including current in-memory progress if browser storage fails. The main route retains export/restore for all known Gerouge chapter saves.

## Unfinished

The remaining campaign/expansion locations still use their original scene art or remote photographs and original interactions. They remain playable and are marked as pending photographic transformation in the map. Updating the shared palette does not count those scenes as photographically complete.

Next passes: registrar/music rooms and nursery; carriage house/gatehouse; chapel/vestry/stair/vault/tower; the remaining case-file and activity locations. Each needs appropriate local scenery, aligned objects and retained investigation logic. There are no first-person walking controls, animated characters, or full ambient soundtrack; travel uses the map and conversations use readable dialogs. Optional sound currently consists of synthesized bell tones.

## Verification

- `tests/gameplay.cjs`: complete detailed-study investigation, wrong paper order, pigment prerequisites, both endings, reload persistence, save export, existing-save preservation, 91 map entries, original routes and touch controls.
- `tests/compatibility.cjs`: backup import, invalid import rejection, all 91 route smoke checks, unavailable-storage reporting and export fallback.
- `tests/school-wing.cjs`: complete school-day chain, both outcomes, wrong route/material/garden actions rejected, drawer and cupboard latches, model roof, working crafted lantern, school backup, old school-save fields, isolated detailed-study save, local fonts/images, desktop and 390px touch navigation.

All three browser suites passed in Chromium with no JavaScript exceptions. The new scene composition, Gothic typography, desktop control placement and mobile panning were visually inspected. Main and school route assets are local. Older routes are not claimed to be independent of remote assets.

Tests require Playwright and Chromium and an HTTP preview at http://127.0.0.1:4173. The test harness uses `/usr/bin/chromium`; adjust that executable path when running on another machine.
