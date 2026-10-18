# Gerouge transformation and continuity status

Gerouge is a separate plantation investigation. The seven imported county mysteries, their 42 search scenes and unrelated county activities have been removed from the active game and travel map. The estate, chapel, orchard, school reconstruction, expansions and final dossier remain playable.

## Investigation

The main photographic route now has a missing-girls case file with seven individual records. Recover the altered roll and concealed photograph, restore the transfer order, open the cabinet with the numbered key and read Mara’s diary. Use the hall key to enter the chapel. Inspect Eva’s bear, document the hatch before opening it, then search the vault’s ledger, index and cabinet lining. A changed hall on your return supplies a new piece of evidence. Record Edmund Rook’s account and challenge it with independent paperwork. Three deductions require the actual evidence; unsupported answers cannot advance them.

The four documented transfers and three unresolved historical fates remain faithful to the existing Gerouge conclusion. Transfer does not establish later safety. The new investigation exposes a present-day alteration while the original passage, tower, hearing and final dossier remain available. No unsupported death or supernatural explanation is treated as proved.

## One estate

`world-layout.json` is the source for `location-inventory.json`: 24 physical locations, each listed once. Investigation chapters are separate tasks in those locations. Historical school play is explicitly labeled 1896 reconstruction. Older hall/study URLs redirect to the canonical photographic rooms. Classroom doors lead directly to an adjoining room; the travel map remains a separate control.

Shared hall, study, dormitory, classroom, conservatory and vault visits use consistent local scene plates. Original Gerouge evidence assignments remain available without pretending each assignment is another physical room. Hotspots follow the visible furnishings.

## Photographic scenes

All 24 distinct physical locations in the travel map now have appropriate locally packaged photographic scenery and playable scene hotspots. The twelve new locations are nursery, flooded passage, tower chamber, tower bell/listening room, carriage house, gatehouse, outdoor rose garden, vestry, sealed staircase, Trust archive, orchard and annex. The nursery also has a matched open-chest variant for the returning-room event.

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

`tests/last-night.cjs` covers the new complete puzzle chain, wrong steps, witness memory, room changes, reconstruction, old ending, backup and mobile controls. `tests/photographic-estate.cjs` checks all 24 distinct local plates, target sizes, spatial travel plan, shared chapter scenery and mobile panning.

## Connected-door correction

All physical navigation now derives from world-layout.json: 24 places, 28 paired thresholds, 56 validated directions. The chapter header identifies floor/area. Every scene has visible door/path controls and explicit edge thresholds outside the current camera view. Chapel exits through the gated rear courtyard; the nursery has no direct greenhouse shortcut; the culvert checks the sluice from either end. Older assignment exits use the same registry and retain their saves. ESTATE-LAYOUT.md documents the physical routes. Three confusingly similar room plates (vestry, tower and Trust archive) were replaced with functionally distinct spaces and realigned objects.

## Rear courtyard and sacred-rose protection

Three added locations—mansion back entrance, gated rear courtyard and old Louisiana cemetery—join the rose-only garden, chapel and tower in a connected rear sanctuary. The central courtyard photograph shows all three landmarks together. Its matched protected variant shows the living rose placed in the basin. The garden and porch views were checked against the courtyard’s chapel architecture. Learn the vow, tend a propagation cutting, name a verified pupil and establish the ward to enter the cemetery and use the rear tower approach. All progress is additive under `hollowing-last-night-v1`; planting consumes the carried cutting. The memorial niche provides a further copy of testimony while preserving the established unresolved fates.

`tests/connected-estate.cjs` exercises all 56 door/path directions and reciprocal returns, including the culvert puzzle from each side. `tests/rose-sanctuary.cjs` covers the ritual, wrong order, verified-name requirement, physical planting, changed scenery, cemetery evidence, save/backup, old ending and mobile exits.
