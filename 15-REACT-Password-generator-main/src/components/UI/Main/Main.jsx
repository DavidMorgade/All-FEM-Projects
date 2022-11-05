import ClipboardInput from '../../ClipboardInput/ClipboardInput';
import Section from './SectionForm/Section';
import StyledMain from './StyledMain';
import Form from './SectionForm/Form';

const Main = () => {
  return (
    <StyledMain>
      <ClipboardInput />
      <Section>
        <Form />
      </Section>
    </StyledMain>
  );
};

export default Main;
