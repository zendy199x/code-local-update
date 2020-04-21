import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface State {
  fieldA: string;
  fieldB: string;
  fieldC: string;
}

export interface Props {
  onButtonAClick: (fieldA: string) => void;
  onButtonBClick: (fieldB: string) => void;
  onButtonCClick: (fieldC: string) => void;
}

export class InputForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fieldA: '',
      fieldB: '',
      fieldC: '',
    }
  }

  private handleTextFieldChange = (field: keyof State) => (event) => {
    this.setState({ [field]: event.target.value } as State);
  }

  private handleButtonClick = (field: keyof State) => () => {
    switch(field) {
      case 'fieldA':
        this.props.onButtonAClick(this.state[field]);
        break;
      case 'fieldB':
        this.props.onButtonBClick(this.state[field]);
        break;
      case 'fieldC':
        this.props.onButtonCClick(this.state[field]);
        break;
    }
  }

  public doComplicatedStuff(text?: string) {
    console.log('This method does a lof of complicated things');
    this.props.onButtonAClick(text);
    this.props.onButtonBClick(text);
    this.props.onButtonCClick(text);
    text && console.log(`Strange things are afoot: ${text}`);
    this.testingMeCanBeFun(text);
  }

  private testingMeCanBeFun = (text?: string) =>{
    if (text == null || text.length > 1) {
      console.log('Nothing to report');
    }
    switch(text) {
      case 'A':
        // Call some callbacks
        this.props.onButtonAClick('A long time ago');
        break;
      case 'B':
        // Call some more callbacks
        this.props.onButtonAClick('A long time ago');
        this.props.onButtonBClick('By the shore');
        break;
      case 'C':
        // Call even more callbacks
        this.props.onButtonAClick('A long time ago');
        this.props.onButtonBClick('By the shore');
        this.props.onButtonCClick('Close to Mordor');
        break;
      case 'D':
        // And maybe some more?
        this.props.onButtonAClick('A long time ago');
        this.props.onButtonCClick('Close to Mordor');
        this.props.onButtonCClick('Despite not being sure if Mordor has shores');
        break;
    }
  };

  public render() {
    return (
      <div>
        <TextField
          id="field_A"
          value={this.state.fieldA}
          onChange={this.handleTextFieldChange('fieldA')}
        />
        <Button
          color="primary"
          onClick={this.handleButtonClick('fieldA')}
        >
          Button A
        </Button>
        <TextField
          id="field_B"
          value={this.state.fieldB}
          onChange={this.handleTextFieldChange('fieldB')}
        />
        <Button
          color="secondary"
          onClick={this.handleButtonClick('fieldB')}
        >
          Button B
        </Button>
        <TextField
          id="field_C"
          value={this.state.fieldC}
          onChange={this.handleTextFieldChange('fieldC')}
        />
        <Button
          color="default"
          onClick={this.handleButtonClick('fieldC')}
        >
          Button C
        </Button>
      </div>
    );
  }
}
