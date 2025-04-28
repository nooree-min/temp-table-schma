# @liam-hq/erd-core

## 0.1.6

### Patch Changes

- [#1037](https://github.com/liam-hq/liam/pull/1037) - ✨ Adding type to indexes / Thanks [@ya2s](https://github.com/ya2s)!
- [#964](https://github.com/liam-hq/liam/pull/964) - 💄 Show Indexes instead of Unique / Thanks [@ya2s](https://github.com/ya2s)!

## 0.1.5

### Patch Changes

- [#909](https://github.com/liam-hq/liam/pull/909) - ✨ Set table show mode in related tables to TABLE_NAME / Thanks [@tnyo43](https://github.com/tnyo43)!

## 0.1.4

### Patch Changes

- [#819](https://github.com/liam-hq/liam/pull/819) - 🔧 fix: update vite and fumadocs-mdx to latest versions / Thanks [@NoritakaIkeda](https://github.com/NoritakaIkeda)!
- [#825](https://github.com/liam-hq/liam/pull/825) - 💄Fixed an issue where the length of the Sidebar button text would change when hovering. / Thanks [@MH4GF](https://github.com/MH4GF)!
- [#842](https://github.com/liam-hq/liam/pull/842) - ✨ Improve DropdownMenu keyboard accessibility / Thanks [@tnyo43](https://github.com/tnyo43)!

## 0.1.3

### Patch Changes

- [#806](https://github.com/liam-hq/liam/pull/806) - ✨ Allow sidebar width adjustment / Thanks [@NoritakaIkeda](https://github.com/NoritakaIkeda)!
- [#806](https://github.com/liam-hq/liam/pull/806) - ✨ Allow sidebar width adjustment / Thanks [@NoritakaIkeda](https://github.com/NoritakaIkeda)!

## 0.1.2

### Patch Changes

- [#792](https://github.com/liam-hq/liam/pull/792) - ♻️ Added a tooltip for truncated table names to improve usability. / Thanks [@prakha](https://github.com/prakha)!
- [#759](https://github.com/liam-hq/liam/pull/759) - ♻️ Reorganize erd-core Structure: Parallelize ERDContent & Consolidate Shared Utilities in features/erd-core / Thanks [@junkisai](https://github.com/junkisai)!
- [#798](https://github.com/liam-hq/liam/pull/798) - 🐛 integrate user editing state into related tables component / Thanks [@junkisai](https://github.com/junkisai)!
- [#797](https://github.com/liam-hq/liam/pull/797) - 🐛 When nodes without relationships are present, display only that node in RelatedTables. / Thanks [@junkisai](https://github.com/junkisai)!

## 0.1.1

### Patch Changes

- [#746](https://github.com/liam-hq/liam/pull/746) - 🐛 Exclude hidden and showMode query parameters from ERDContent rendering in RelatedTables / Thanks [@junkisai](https://github.com/junkisai)!

## 0.1.0

### Minor Changes

- [#739](https://github.com/liam-hq/liam/pull/739) - ✨ Pre-calculate layout for Related Tables before displaying in Main Area / Thanks [@junkisai](https://github.com/junkisai)!

### Patch Changes

- [#726](https://github.com/liam-hq/liam/pull/726) - feat: expose all useReactflow functions in useCustomReactflow and replace direct useReactflow usages / Thanks [@devin-ai-integration](https://github.com/apps/devin-ai-integration)!
- [#708](https://github.com/liam-hq/liam/pull/708) - ♻️ Swap useReactflow's fitView() with a custom fitView() function / Thanks [@junkisai](https://github.com/junkisai)!
- [#708](https://github.com/liam-hq/liam/pull/708) - ♻️ Remove useSyncHiddenNodesChange hook and update VisibilityButton to manage node visibility directly / Thanks [@junkisai](https://github.com/junkisai)!
- [#708](https://github.com/liam-hq/liam/pull/708) - ♻️ Consolidate table selection/deselection logic into useTableSelection hook / Thanks [@junkisai](https://github.com/junkisai)!
- [#708](https://github.com/liam-hq/liam/pull/708) - 🐛 Fix RelatedTables additional buttons prop rendering / Thanks [@junkisai](https://github.com/junkisai)!
- [#708](https://github.com/liam-hq/liam/pull/708) - ♻️ Limit useAutoLayout functionality to layout calculations only / Thanks [@junkisai](https://github.com/junkisai)!

## 0.0.26

### Patch Changes

- [#713](https://github.com/liam-hq/liam/pull/713) - 🐛 Fix hydration error in Mobile / Thanks [@MH4GF](https://github.com/MH4GF)!

## 0.0.25

### Patch Changes

- [#677](https://github.com/liam-hq/liam/pull/677) - 🐛 Removed a green dot on the left top when it rendered / Thanks [@tnyo43](https://github.com/tnyo43)!
- [#680](https://github.com/liam-hq/liam/pull/680) - 🎨 Add Mr.Jack svg to NetworkError / Thanks [@hoshinotsuyoshi](https://github.com/hoshinotsuyoshi)!
- [#690](https://github.com/liam-hq/liam/pull/690) - ✨ Disable selectionOnDrag on touch devices / Thanks [@MH4GF](https://github.com/MH4GF)!
- [#673](https://github.com/liam-hq/liam/pull/673) - 🐛 Adjust the item height calculation in the Columns component. / Thanks [@MH4GF](https://github.com/MH4GF)!
- [#671](https://github.com/liam-hq/liam/pull/671) - 🐛 Improve ERD auto-layout rendering with state-based approach / Thanks [@junkisai](https://github.com/junkisai)!
- [#673](https://github.com/liam-hq/liam/pull/673) - 🐛 fix: ONE_TO_ONE cardinality inconsistency between left and right / Thanks [@MH4GF](https://github.com/MH4GF)!

## 0.0.24

### Patch Changes

- c69f975: 🚸 New Mobile Toolbar's `ShowModeMenu`
- ee2baeb: 🎨 Enhance MenuItemLink with improved external link handling
- 0675da3: 💄Improve version display styling with flexbox alignment
- f607e58: 🐛 Fix AppBar scrolling issue on mobile safari view
- da96e73: ✨ Add close functionality for mobile toolbar when clicking outside
- 5a9ffd4: 🔧Add ExternalLink flag to some LeftPane menu items
- 232382c: 🎨 Hide Sidebar trigger at canvas on mobile view
- 8a19c1e: 💄 Adjust UI of LeftPane on mobile widths
- ad6e8bb: 🐛 Refactor ERD renderer toolbar positioning and visibility
- 2403f2c: Fix sticky header z-index for Related Tables
- d8c46c3: 💄 Refactor Comment component markup and styling
- ec8d044: 🎨 Make SidebarFooter appear after scrolling when table list overflows
- ba092dc: ➕ Bump _path-to-regexp_ from 0.1.10 to 0.1.12 along with a few other packages
- Updated dependencies [c69f975]
- Updated dependencies [8a19c1e]
  - @liam-hq/ui@0.0.11

## 0.0.23

### Patch Changes

- 17d61e8: 🐛 Fixed the 'data-erd' attribute in the active table to make type names visible
- 7904b7e: 💄 Change position of info icon to error display for mobile view
- 21d5609: 🐛 remove meaningless connection

## 0.0.22

### Patch Changes

- aecb91a: ✨ Implement collapsible columns in ERD table detail view
- d7bbb7f: 🚸 Add new Mobilie Toolbar
- ee5f79e: ✨ Add support for hidden nodes in URL state management
- f3a8940: 💄 Add styling for mobile widths
- 69e391a: 💄 Enhance mobile Toolbar animation behavior and improve UI responsiveness
- fe2af29: ✨ Add toggle function for all sections in TableDetailDrawer
- 203936a: 💄 Update styles for responsive design and sticky headers in TableDetail components
- 47a7cdb: ✨ Add browser back and forward support for showMode
- 93fc858: ♻️ Refactor TableDetail components to use CollapsibleHeader
- f3a8940: ✨ Add Menu icon to UI package
- 553c40f: 💄 Improve error display responsive styling
- Updated dependencies [aecb91a]
- Updated dependencies [d7bbb7f]
- Updated dependencies [f3a8940]
- Updated dependencies [f3a8940]
  - @liam-hq/ui@0.0.10

## 0.0.21

### Patch Changes

- 18db4ca: 💄Fixed icon size
- 9cba809: 💄 Add icons to the table detail component and update the header style.
- Updated dependencies [9cba809]
  - @liam-hq/ui@0.0.9

## 0.0.20

### Patch Changes

- 2137216: 💄 Add elk.alignment property to node conversion for centralized layout
- 76bc7be: 🚸 Make node width variable to accommodate table/column name and type
- 18e75a3: 🚧 Prevent omission of TableColumn

## 0.0.19

### Patch Changes

- 48ae2c2: 🐛 Update TableCounter to count only table nodes

## 0.0.18

### Patch Changes

- dd1e7b4: 🚸 Add dedicated handling for network-related errors with a new `NetworkErrorDisplay` component.
- 97c5996: ✨ Implement show mode handling in URL parameters and state management
- 6a34d7b: 🚸 Enhanced error rendering in the `ErrorDisplay` component, adding detailed error summaries

## 0.0.17

### Patch Changes

- aa74483: 🐛 Fix argument type of errors

## 0.0.16

### Patch Changes

- 71b6f60: 🚸 Add ErrorDisplay component for handling and displaying errors in ERDViewer
- d0858af: 🚸 delete unnecessary margin on mobile
- 40dffc8: 💄 Move react flow attribution from bottom-right to bottom-left
- Updated dependencies [46cd9e6]
  - @liam-hq/ui@0.0.8

## 0.0.15

### Patch Changes

- 6a37715: ♻️ refactor usePopStateListener
- 1f6107b: 🐛 Apply `window.requestAnimationFrame` to resolve conflicts between auto-layout and fitView operations

## 0.0.14

### Patch Changes

- 75053da: 🐛 Fix unnecessary whitespace generation
- 950f375: :bug: No focus when Active table in Related Tables
- 9c6bcc6: ✨ feat: Enable browser back and forward for active table

## 0.0.13

### Patch Changes

- e0c748c: :bug: Fixed problem with fitView not working properly while displaying only some tables
- d10e628: 🐛: Fix ReleaseVersion display
- 17746fd: ♻️ Rename cliVersion to version

## 0.0.12

### Patch Changes

- 21e4ad4: 🐛 : move RelationshipEdgeParticleMarker for gradient rendering to ERDRenderer
- 7a97784: 🐛 : move CardinalityMarkers component in ERDRenderer
- 9ca556c: 🚸 : disable click events on RelationshipEdge
- 95dd878: 🐛 update TableHeader styles and add handle positioning for connections
- ef56f37: :recycle: Refactoring the process of getting sidebar state from cookie
- 2235c2c: ♻️: Refactor ReleaseVersion for ERD Web
- Updated dependencies [7a97784]
- Updated dependencies [ef56f37]
  - @liam-hq/ui@0.0.7

## 0.0.11

### Patch Changes

- 4e114d0: :lipstick: Eliminate overlap between rail and scrollbar
- Updated dependencies [4e114d0]
  - @liam-hq/ui@0.0.6

## 0.0.10

### Patch Changes

- 9ba18b9: ⚡️ Disable edge animation in highlightNodesAndEdges
- 31575c5: 💄 feat: Sticky positioning for related tables in TableDetail
- d097cea: :bug: fix: Comment component to use `<span>` instead of `<p>`
- e3f3f37: ⚒️ Fixing CSS Modules error with toolbar
- 9ba18b9: 🚸 Add animated particles to highlighted relationship edges

## 0.0.9

### Patch Changes

- 28a9eb2: :lipstick: Update font-family settings across ERD Renderer components
- e3faa74: ⚒️ Adjust the appearance of the toolbar on mobile devices.
- 34dd3eb: refactor: Remove unused isRelatedToTable function and simplify TableNode component logic
- 82ec743: 🐛 Fixed problem with TableNode not being highlighted when opened from URL with query parameter
- 1eb5dc1: :recycle: Update css module for edge marker
- Updated dependencies [28a9eb2]
- Updated dependencies [1c20fd1]
  - @liam-hq/ui@0.0.5

## 0.0.8

### Patch Changes

- e2d2c06: 🐛 bug-fix: Highlight source cardinality with multi-foreign keys
- 90ccd89: refactor: Update handleLayout to accept nodes and improve hidden node handling
- 486286a: 📈 : Add open related tables log event
- 0a129c2: ✨ Enhance node conversion functions to support hierarchical structure and layout options for NonRelatedTableGroup nodes
- fb03451: 📈 Add cliVer parameter to log event functions and component.s
- 704f606: :chart_with_upwards_trend: add type for reposition table logging
- b63e2da: fix: Render CardinalityMarkers based on loading state
- ee77b3f: Show column types in table nodes when the table is highlighted
- 116365d: 📈 Add appEnv parameter to logging events for environment tracking
- 54d6ca9: ✨ Add NonRelatedTableGroupNode component with styling
- 582ac0e: 📈 Add click logging for toolbar actions and include show mode in event data
- bc2118d: 🐛 Fixed problem with active tables not being highlighted in LeftPane when opened via query parameter
- d0a27e0: maintenance: Add GitHub Release Link and Disable some features

## 0.0.7

### Patch Changes

- f3e454a: refactor: integrate highlightNodesAndEdges function for improved node and edge highlighting on hover
- 18e5e8e: ♻️ Remove LinkIcon and replace its usage with Link component
- 594386f: refactor: Remove highlightedHandles
- 07b922e: :chart_with_upwards_trend: add types for select table logging
- 298c7cc: ✨Implementing a key-only view
- 555a157: feat: hidden nodes can now be reflected from query parameters
- c0934d3: ✨ Add LinkIcon🔗 and apply it as an icon for foreign keys.
- 9b62de2: Resolving the issue of remaining highlights
- 343e01d: New `ReleaseVersion` component into `HelpButton`
- 4859d37: feat: get hidden nodes via query parameter now compresses
- 8c9c9c5: 🐛 Fixed an issue where opening an active table from a query parameter would not highlight it
- b372a0f: refactor: Refactoring of highlight edges on active table
- 7c75b53: 📈: integrate toggle logging for sidebar and visibility button actions
- f46d097: 📈 : add click logging for CopyLinkButton
- d8ff5d5: Refactoring and testing of highlights on active tables
- 6c2a2d5: 📈 : add toggleLogEvent utility for logging toggle actions
- c0b2d01: refactor Integrated `isRelated` into `isHighlighted`
- aecbcc5: fix: Fixed failure to highlight parent tables
- Updated dependencies [18e5e8e]
- Updated dependencies [0870088]
- Updated dependencies [c0934d3]
  - @liam-hq/ui@0.0.4

## 0.0.6

### Patch Changes

- 987082d: Update hidden node cardinalities
- 60bfdeb: refactor: Move the calculation to TableColumnList and TableColumn only displays the props
- 16118e3: 💄 add loading spinner
- 9c44a6a: fix: Fixed an issue where the correct table was not focused when sharing URLs in TableDetail
- c3756b1: Reduce the width of TableDetail to prevent TableNode from being obscured
- 594a73b: Enable hiding cardinalities on source node if target node is hidden
- 88cf707: refactor: The behavior of TableNode when clicked is unified to be handled by ERDContent
- b08232b: Highlight related edges and cardinalities when a TableNode is active.
- e21fdc5: Enable clicking while Table Detail opened
- 296fdaa: Restored columnType visibility.
- b4b76d6: Minor refactoring of ERDContent
- Updated dependencies [3ebbac2]
  - @liam-hq/ui@0.0.3

## 0.0.5

### Patch Changes

- 66bef4c: fix: reword to open in main area
- bfcbb3a: LeftPane now shows the number of tables currently being displayed
- ae4e27a: fix: Fixed an issue where edges were displayed during the initial loading
- 3f4965f: `Tidy up` button now allows layout adjustments for only the currently displayed nodes
- 9e88995: Refactored components for better maintainability: TableColumnList, TableColumn, Cardinality.
- 28e7f9e: fix: reduce button-in-button
- 9ed0bdd: It is now possible to hide tables other than Related Tables
- 8109940: refactor: reduce useEffect
- c6bc898: refactor: remove unused convertElkEdgesToEdges function
- b6112e9: Fixed incorrect cardinality icon positioning (left/right)
- a9b9579: ✨Changed the default show mode to 'Table name only'
- 471d49b: fix: Fixed an issue where edges were displayed incorrectly when switching the show mode
- 7eccf51: Add current link copy button
- 3b9c3b4: refactor: Reduced performance degradation caused by calculations for source and target
- a85acb3: fix: Fixed an issue where URL sharing in TableDetail sometimes did not work correctly
- 846feee: Fixed excessive highlighting of cardinality elements.
- d255ff3: fix: Removed the highlight on Edge hover to prevent performance degradation
- Updated dependencies [9ed0bdd]
- Updated dependencies [7eccf51]
  - @liam-hq/ui@0.0.2

## 0.0.4

### Patch Changes

- 1aeed01: fix: reduce button-in-button
- 8ed7b59: Enabled toggling the visibility of Table Nodes from the Left Pane.
- b1521ed: Add url query params for quick access
- Updated dependencies [8ed7b59]
  - @liam-hq/ui@0.0.1

## 0.0.3

### Patch Changes

- Fixed border radius for TABLE_NAME show mode.
- Update HTML and view header titles in ERD.
- feat: 1:n and 1:1 notations can now be displayed when highlighting relationships
- Added links to documentation and community resources
- feat: update ELK layout options for improved node placement and spacing
- fix: disable delete key functionality for delete TableNode
- refactor: optimize edge highlighting using useReactFlow hooks

## 0.0.2

### Patch Changes

- 48f610a: Add tooltips to display the full table name when it is truncated in the Table node
