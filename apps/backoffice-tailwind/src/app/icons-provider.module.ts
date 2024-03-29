import {NgModule} from '@angular/core';
import {NgIconsModule} from '@ng-icons/core';
import {
  heroHome,
  heroUserCircle,
  heroUserGroup,
  heroFolder,
  heroStar,
  heroBanknotes,
  heroUsers,
  heroArrowRightOnRectangle,
  heroPlusCircle,
  heroMagnifyingGlass,
} from '@ng-icons/heroicons/outline';

const icons = {
  heroUserCircle,
  heroHome,
  heroUserGroup,
  heroFolder,
  heroStar,
  heroBanknotes,
  heroUsers,
  heroArrowRightOnRectangle,
  heroPlusCircle,
  heroMagnifyingGlass,
};

@NgModule({
  imports: [NgIconsModule.withIcons(icons)],
  exports: [NgIconsModule],
})
export class IconsProviderModule {}
