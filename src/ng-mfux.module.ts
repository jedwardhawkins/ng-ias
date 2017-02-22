import { module } from 'angular';
import AppBarComponent from './components/app-bar/app-bar.component';
import AvatarComponent from './components/avatar/avatar.component';
import ButtonComponent from './components/button/button.component';
import DialogComponent from './components/dialog/dialog.component';
import DialogService from './components/dialog/dialog.service';
import HeaderComponent from './components/header/header.component';
import IconComponent from './components/icon/icon.component';
import InputContainerComponent from './components/input/input.component';
import { ListComponent, ListHeaderComponent, ListItemComponent } from './components/list/list.component';
import { MenuComponent, MenuFooterComponent, MenuHeaderComponent } from './components/menu/menu.component';
import NavComponent from './components/nav/nav.component';
import SearchBoxComponent from './components/search-box/search-box.component';
import SideNavComponent from './components/side-nav/side-nav.component';
import TileComponent from './components/tile/tile.component';
import TileGridComponent from './components/tile-grid/tile-grid.component';
import { SortDirective, SortOnDirective } from './components/table/sort.directive';
import { ToggleDirective } from './components/toggle/toggle.directive';
import ToggleService from './components/toggle/toggle.service';

module('ng-mfux', [])
    .component('mfAppBar', AppBarComponent)
    .component('mfAvatar', AvatarComponent)
    .component('mfButton', ButtonComponent)
    .component('mfDialog', DialogComponent)
    .component('mfHeader', HeaderComponent)
    .component('mfIcon', IconComponent)
    .component('mfInputContainer', InputContainerComponent)
    .component('mfList', ListComponent)
    .component('mfListHeader', ListHeaderComponent)
    .component('mfListItem', ListItemComponent)
    .component('mfMenu', MenuComponent)
    .component('mfFooterMenu', MenuFooterComponent)
    .component('mfHeaderMenu', MenuHeaderComponent)
    .component('mfNav', NavComponent)
    .component('mfSearchBox', SearchBoxComponent)
    .component('mfSideNav', SideNavComponent)
    .component('mfTile', TileComponent)
    .component('mfTileGrid', TileGridComponent)

    .directive('mfToggle', ToggleDirective)
    .directive('mfSort', SortDirective)
    .directive('mfSortOn', SortOnDirective)

    .service('MfDialogService', DialogService)
    .service('MfToggleService', ToggleService);