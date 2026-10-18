# Gerouge transformation and continuity status

Gerouge is a separate plantation investigation. The seven imported county mysteries, their 42 search scenes and unrelated county activities have been removed from the active game and travel map. The estate, chapel, orchard, school reconstruction, expansions and final dossier remain playable.

## Investigation

The main photographic route now has a missing-girls case file with seven individual records. Recover the altered roll and concealed photograph, restore the transfer order, open the cabinet with the numbered key and read Mara’s diary. Use the hall key to enter the chapel. Inspect Eva’s bear, document the hatch before opening it, then search the vault’s ledger, index and cabinet lining. A changed hall on your return supplies a new piece of evidence. Record Edmund Rook’s account and challenge it with independent paperwork. Three deductions require the actual evidence; unsupported answers cannot advance them.

The four documented transfers and three unresolved historical fates remain faithful to the existing Gerouge conclusion. Transfer does not establish later safety. The new investigation exposes a present-day alteration while the original passage, tower, hearing and final dossier remain available. No unsupported death or supernatural explanation is treated as proved.

## One estate

`world-layout.json` is the source for `location-inventory.json`: 25 physical locations, each listed once. Investigation chapters are separate tasks in those locations. Historical school play is explicitly labeled 1896 reconstruction. Older hall/study URLs redirect to the canonical photographic rooms. Classroom doors lead directly to an adjoining room; the travel map remains a separate control.

Shared hall, study, dormitory, classroom, conservatory and vault visits use consistent local scene plates. Original Gerouge evidence assignments remain available without pretending each assignment is another physical room. Hotspots follow the visible furnishings.

## Photographic scenes

All 25 distinct physical locations in the travel map now have appropriate locally packaged photographic scenery and playable scene hotspots. The twelve new locations are nursery, flooded passage, tower chamber, tower bell/listening room, carriage house, gatehouse, outdoor rose garden, vestry, sealed staircase, Trust archive, orchard and annex. The nursery also has a matched open-chest variant for the returning-room event.

The original estate/chapel/finale/annex assignments use the same location plates. The registrar drawer is a study assignment rather than a separate room. School-day play stays explicitly labeled as a historical reconstruction. Ink/plum/burgundy/ivory colors and local Cinzel/Crimson Pro fonts remain. All scene images are generated depictions of fictional Gerouge.

## The girls’ last night

`deep-investigation.js` extends the main scene engine without replacing any earlier chapter. Seven collectible personal accounts connect Mara’s promise, Iris’s stitched signal colors, Eliza’s route sketch and the four carriage passengers’ independent records. Recover the nursery chest tracing and retaining pin; document and operate the sluice in sequence; trace the three bell cables using two sources; recover a workshop clevis pin, repair the lever and engage its ratchet. The lantern reveals a glass negative. Reconstruct the four supported movements and preserve the finding.

Returning rooms react: the nursery chest is visibly open, a classroom card is altered, and a previously documented study photograph is removed from its backing. This last event only occurs after the photograph was earned, so it cannot block the original study puzzle or remove the saved copy. One controlled bell test receives an unexplained answer. The game records it without calling it proof of a haunting.

Rook, Miriam and Agnes retain asked questions, withheld evidence and presented records. Their follow-ups change with documentary and bell evidence; earlier statements remain in the journal. Reconstruction clarifies the last supported route, not the three girls’ unknown later fates.

## Saves

The live origin is unchanged. `gerouge-case-save.js` reads the historical mixed save once and copies only Gerouge estate, chapel, finale, evidence and orchard progress to `hollowing-gerouge-case-v1`. The original mixed save is left untouched. Foreign cases are neither loaded nor exported. The alternate study save migrates earned items, flags and decisions into the canonical study. Other Gerouge chapter keys remain intact.

`hollowing-investigation-v1` stores the chapel/vault evidence and deductions. `hollowing-last-night-v1` stores personal accounts, mechanism states, witness memory, returning-room events and reconstruction. All fields are additive; old endings are unchanged. Main and school backups include it and the separated casebook. The importer accepts older backups by filtering their mixed record. Saves stay local to the browser; export/restore supports moving devices.

## Remaining limitations

The main travel route is photographic and scene-first throughout. Earlier casebook and expansion assignments retain their panel/checklist controls and separate chapter progress, now with shared photographic scenery. They remain accessible from Investigation chapters for continuity and save preservation. Converting those older interfaces into the main engine is still unfinished. No free walking, animated characters, voice acting or full ambient soundtrack is claimed. Optional sound uses synthesized bell tones. The three later historical fates intentionally remain unverified, as in the established Gerouge ending.

## Verification

Browser suites cover the main study puzzle and both decisions, historical school chapter and both outcomes, setting, backup/restore and storage failures, removal and migration of mixed cases, canonical routes and direct doors, the new physical investigation, all 32 estate clues/eight deductions/three interviews/hearing, all 16 final clues/timeline/cipher/both endings, eight chapel leads, persistence and desktop/mobile controls.

`tests/last-night.cjs` covers the new complete puzzle chain, wrong steps, witness memory, room changes, reconstruction, old ending, backup and mobile controls. `tests/photographic-estate.cjs` checks all 25 distinct local plates, target sizes, spatial travel plan, shared chapter scenery and mobile panning.

## Connected-door correction

All physical navigation now derives from world-layout.json: 25 places, 29 paired thresholds, 58 validated directions. The chapter header identifies floor/area. Every scene has visible door/path controls and explicit edge thresholds outside the current camera view. Chapel exits through the gated rear courtyard; the nursery has no direct greenhouse shortcut; the culvert checks the sluice from either end. Older assignment exits use the same registry and retain their saves. ESTATE-LAYOUT.md documents the physical routes. Three confusingly similar room plates (vestry, tower and Trust archive) were replaced with functionally distinct spaces and realigned objects.

## Rear courtyard and sacred-rose protection

Three added locations—mansion back entrance, gated rear courtyard and old Louisiana cemetery—join the rose-only garden, chapel and tower in a connected rear sanctuary. The central courtyard photograph shows all three landmarks together. Its matched protected variant shows the living rose placed in the basin. The garden and porch views were checked against the courtyard’s chapel architecture. Learn the vow, tend a propagation cutting, name a verified pupil and establish the ward to enter the cemetery and use the rear tower approach. All progress is additive under `hollowing-last-night-v1`; planting consumes the carried cutting. The memorial niche provides a further copy of testimony while preserving the established unresolved fates.

`tests/connected-estate.cjs` exercises all 58 door/path directions and reciprocal returns, including the culvert puzzle from each side. `tests/rose-sanctuary.cjs` covers the ritual, wrong order, verified-name requirement, physical planting, changed scenery, cemetery evidence, save/backup, old ending and mobile exits.

## Physical actions and local room sections

The carriage-house left door now enters its own harness/saddle bay; three other unassigned interior openings enter same-room coat, chalk/cloak and linen recesses. All four return through the same opening, retain their parent scene/map identity and package distinct photographs locally. The room-local findings are stored additively in the last-night save. The 25-location graph and 58 directional connections remain intact. Three inaccurate threshold markers were realigned or explicitly moved to the camera edge.

Every diamond in the main photographic route and its new sections now opens a visual close-up. Photographic object layers and native photo cutouts animate catches, drawers, cabinet panels, chest lids, model roofs, floorboards, the sluice wheel/vent/pin, bell cables/lever/ratchet, lamp shutter, rose watering/root tending/planting, glass-plate backlighting and evidence collection. A photographic Rook interview scene retains the exact established testimony. Evidence is readable as physical papers or subtitles, with the full wording also in an accessible field-notes disclosure. Puzzle handlers still decide success before the action performance; animation never supplies missing items or bypasses gates. Reduced-motion users receive the same state changes immediately.

These are interactive rendered close-ups and transitions, not filmed video or freely moving characters. Retained legacy chapter panels remain available with their prior interfaces and saved progress; their migration into the main scene engine remains unfinished. `tests/physical-actions.cjs` checks every main diamond, the four local sections and their objects, opening and collection, blocked steps, persistence, old endings, touch and reduced motion. The photograph-map test now waits for the asynchronously loaded plan before counting its entries.

## The living estate

All 25 locations and four internal sections now have discovery-driven return scenes and inspectable physical traces. First visits are remembered; players can deliberately frame a reference view. Returning after a discovery exposes a specific change, with the earlier image available for comparison. Reloading a view does not advance the visitor or create another event. Four hands-on tools turn objects, move a raking lantern beam, rub away covering dust, and align reference marks; observations and personal-account comparisons are distinct saved states.

The carriage encounter lowers the unfastened hatch after the harness bay is examined. A matched local photograph shows the lid down; the player can lift it and can always push through from the cellar side. Wax, tread and service-paper observations form a seven-stop linked trail across the orchard, gatehouse, Trust archive, hall, back entrance and courtyard. Out-of-order observations are retained and incorporated when the earlier link is recovered. The trail establishes present interference without inventing a new fate or bypassing the existing signed-revision deduction.

An unseen visitor advances only along registered estate connections as the player changes locations. Adjacent footsteps can cast a brief threshold shadow. Optional synthesized spatial sounds have equivalent visible source cues and follow controls that use the real doors and their existing locks. Carried living roses tremble near an adjacent disturbance; the planted rose holds the rear sanctuary boundary against the visitor. Protected return scenes reveal older marks in steadier conditions instead of claiming that a fresh intruder crossed a warded door. Each girl's original habits have a distinct drawn signature: violet loops, crooked river bend, three stitches, four tallies, rosemary, duplicate correction, folded ticket.

State lives additively in `hollowing-last-night-v1.living`, is included in the existing export/import format and retains unknown prior fields. New photographs/materials are packaged locally. `tests/living-estate.cjs` covers every view/tool, attribution gates, the hatch, connected sound/visitor routes, reload idempotence, rose boundaries, all 29 saved observations and backup, touch controls and reduced motion. Older legacy chapter panels retain their earlier interface; freely moving voiced characters and filmed cutscenes are not implemented.
