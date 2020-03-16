import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository.interface';

/**
 * Generated class for the RepositoriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'repositories-html',
  templateUrl: 'repositories.component.html'
})
export class RepositoriesComponent {

  @Input() repo:Repository;

}
