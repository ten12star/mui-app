import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { Container, Checkbox } from '@mui/material';
import { FormGroup, FormControlLabel } from '@mui/material';


function App() {
  return (
    <Container maxWidth="lg">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <Checkbox label="Male" defaultChecked />
      <Checkbox label="Female" />
      <Checkbox label="Don't make sure" disabled />
      <Checkbox label="Required" disabled checked />

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </Container>
  );
}

export default App;