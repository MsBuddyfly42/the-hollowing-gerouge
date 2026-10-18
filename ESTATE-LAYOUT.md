# Gerouge physical layout

`world-layout.json` is the source of truth for all 25 locations, 29 paired thresholds and 58 travel directions. `scripts/inventory.cjs` validates reciprocal neighbors and matching exits, then generates the browser registry and searchable inventory. Scene door markers, exit controls, map connections and older-assignment exit links use this registry.

| Area | Physical connections |
| --- | --- |
| Arrival | Approach ↔ front hall; approach ↔ gatehouse; approach ↔ rose garden |
| Mansion | Hall ↔ study; hall ↔ school corridor/classroom; hall ↔ tower stair |
| School wing | Classroom ↔ dormitory; classroom ↔ workshop; dormitory ↔ nursery; dormitory ↔ annex |
| Service wing | Workshop ↔ conservatory; conservatory ↔ rose garden |
| Grounds | Rose garden ↔ rear courtyard; rose garden ↔ carriage house; carriage house ↔ orchard |
| Gatehouse extension | Gatehouse ↔ Trust archive workroom |
| Chapel | Chapel ↔ vestry; chapel hatch ↔ records vault; vestry ↔ sealed staircase; sealed staircase ↔ vault |
| Escape route | Vault ↔ flooded passage; passage culvert ↔ orchard |
| Tower | Tower chamber ↔ spiral stair/bell listening room; tower rear stair ↔ gated courtyard |
| Rear sanctuary | Hall ↔ back entrance; back entrance ↔ gated courtyard; courtyard ↔ chapel; courtyard ↔ cemetery |

There is no direct nursery-to-greenhouse connection and no chapel-door shortcut to the plantation approach. Returning from the chapel leads into the gated courtyard; its garden gate leads into the rose-only garden. The route through the orchard culvert is blocked from both ends until the raised walkway is cleared. The key, hatch, route tracing and tower investigation prerequisites remain in force.

Visible thresholds use markers on the doorway, gate or stairs. Thresholds outside the fixed camera view are explicitly identified at a scene edge; the interface does not present furniture or a window as a door. Every scene also lists its physical exits. The return arrow follows the actual connected arrival room. The map remains available for longer travel.

Earlier casebook/expansion assignments and the historical reconstruction retain their saves and task maps. Their physical exit links enter the same canonical estate. Historical doorway controls explicitly identify leaving the reconstruction.

The vestry is now a small vestment/storage room adjoining the chapel, the tower a bare octagonal masonry chamber with a spiral stair, and the Trust archive a cool modern workroom inside a historic shell. These replace the three visually similar warm formal interiors. Evidence and door markers were realigned to the new scenes.

## Sacred roses

The gated backyard contains the chapel, the attached mansion tower access and an old Louisiana cemetery close around one shared courtyard. The memorial cenotaph does not invent death dates for the missing pupils. All garden beds are roses. Learn the caretaker vow, water and loosen a living propagation cutting, recover a pupil’s true name and set the rose in the basin. This consumes the carried cutting and establishes persistent sanctuary, opening the cemetery gate and protecting the rear tower threshold. The courtyard changes to a matched planted-rose scene. Cemetery evidence supports the escape investigation without declaring the unresolved girls dead. The whole ritual is additive in the existing last-night save and backup format.

The carriage-house floor hatch descends to its own shallow brick service cellar. Its only doorway is the same stair back upstairs. It is separate from the chapel vault and culvert; the drain is not a tunnel. The open padlock does not impose a new key gate. Three additive findings persist in the existing last-night save.

Four internal openings have parent-room sections in `world-layout.json`: carriage house → harness/saddle bay, entrance hall → under-stair coat recess, classroom → chalk/cloak store, annex → linen recess. These retain the parent `scene` and use a `section` query parameter. Each has one return through the same opening and no link into an unrelated house room. They have independent local photographic plates and inspectable objects. The estate map still lists 25 physical locations, not duplicate room versions. `doorway-audit.json` records the inspected thresholds and furniture distinctions. Hall rear glass doors now map to the rear porch; the school corridor and vault passage threshold use honest edge markers instead of columns/bookshelves.

`action-scenes.js` wraps the existing commands rather than replacing their rules. `action-art.js` renders photographic cutouts and locally packaged object layers. Successful commands animate visible objects; blocked commands show resistance without changing puzzle flags. The study drawer, nursery chest and cleared passage also use matched room state plates. Collection removes the drawer key/envelope from the close-up. Readable papers and an accessible field-notes disclosure preserve the original evidence. `room-sections.js` and visual observations are additive to existing saves.

`living-estate-data.js` assigns one reactive profile to each canonical location and each internal section. Sound destinations are either a direct registered neighbor or the parent of the current section. The visitor itinerary is validated edge by edge against the same graph; it cannot enter a protected sanctuary or pass the blocked sluice. The seven linked disturbance comparisons retain the existing travel map. A lowered carriage hatch adds an opening action, never a new destination or one-way lock.
