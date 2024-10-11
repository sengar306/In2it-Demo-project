import { Component } from '@angular/core';
import {
  NgWizardConfig,
  NgWizardService,
  STEP_STATE,
  StepChangedArgs,
  StepValidationArgs,
  THEME,
} from 'ng-wizard';
import { of } from 'rxjs';

// import { ColDef, GridOptions , GridApi} from 'ag-grid-community';

// import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-solutionarea',

  templateUrl: './solutionarea.component.html',
  styleUrls: ['./solutionarea.component.css'],
})
export class SolutionareaComponent {
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden,
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.default,
    toolbarSettings: {
      toolbarExtraButtons: [
        {
          text: 'Finish',
          class: 'btn btn-info',
          event: () => {
            alert('Finished!!!');
          },
        },
      ],
    },
  };

  constructor(private ngWizardService: NgWizardService) {}

  ngOnInit() {}

  showPreviousStep(_event: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(_event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(_args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(_args: StepValidationArgs) {
    return of(true);
  }
}
