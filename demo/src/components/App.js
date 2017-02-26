import React, { Component } from 'react';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light';
import js from 'highlight.js/lib/languages/javascript';
import syntaxTheme from 'react-syntax-highlighter/dist/styles/vs';
import {
  AppContainer,
  Content,
  Footer,
  Header,
  Link,
  Paragraph,
  SubTitle,
  Title,
} from 'ross-ui';
import ContentCenter from '../components-styled/ContentCenter';
import GitHubImage from '../components-styled/GitHubImage';
import Input from '../components-styled/Input';
import InputContainer from '../components-styled/InputContainer';
import SpanLink from '../components-styled/SpanLink';
import formatName, { FIRST_LAST, LAST_FIRST } from '../../../lib';

registerLanguage('javascript', js);

export default class App extends Component {

  state = {
    firstName: 'Ross',
    lastName: 'Khanas',
    sortOrder: undefined,
  }

  onFirstNameValueChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  }

  onLastNameValueChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  }

  onSortOrderValueChange = (e) => {
    if (e.target.value === 'undefined') {
      this.setState({
        sortOrder: undefined,
      });
      return;
    }
    if (e.target.value === FIRST_LAST.toString()) {
      this.setState({
        sortOrder: FIRST_LAST,
      });
      return;
    }
    if (e.target.value === LAST_FIRST.toString()) {
      this.setState({
        sortOrder: LAST_FIRST,
      });
      return;
    }
  }

  render() {
    const repositoryLink = 'https://github.com/rtkhanas/format-name';
    const codeString = `
import formatName, { FIRST_LAST, LAST_FIRST } from 'format-name';

formatName('${this.state.firstName}', '${this.state.lastName}', ${this.state.sortOrder});
`;
    return (
      <AppContainer>
        <Link href={repositoryLink} >
          <GitHubImage
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
          />
        </Link>
        <Header>
          <Title>Format Name</Title>
          <Paragraph>
            Make correct first/last name combination among different languages including preference.
          </Paragraph>
          <Paragraph>
            A project by <Link href="https://rtkhanas.github.io/">Ross Khanas</Link>.
          </Paragraph>
        </Header>
        <Content>
          <SubTitle>Demo</SubTitle>
          <ContentCenter>
            <div>
              <SpanLink onClick={() => { this.setState({ firstName: 'Ross', lastName: 'Khanas' }); }} >
                English
              </SpanLink>
              <span> </span>
              <SpanLink onClick={() => { this.setState({ firstName: '台綸', lastName: '曾' }); }} >
                Chinese
              </SpanLink>
              <span> </span>
              <SpanLink onClick={() => { this.setState({ firstName: 'そうすけ', lastName: 'さがら' }); }} >
                Hiragana
              </SpanLink>
            </div>
            <InputContainer>
              <Input type="text" value={this.state.firstName} onChange={this.onFirstNameValueChange} />
            </InputContainer>
            <InputContainer>
              <Input type="text" value={this.state.lastName} onChange={this.onLastNameValueChange} />
            </InputContainer>
            <div>
              <Paragraph>
                <input
                  type="radio"
                  name="sortingType"
                  value={'undefined'}
                  checked={this.state.sortOrder === undefined}
                  onChange={this.onSortOrderValueChange}
                />
                No Sorting
              </Paragraph>
              <Paragraph>
                <input
                  type="radio"
                  name="sortingType"
                  value={FIRST_LAST.toString()}
                  checked={this.state.sortOrder === FIRST_LAST}
                  onChange={this.onSortOrderValueChange}
                />
                First Name, Last Name
              </Paragraph>
              <Paragraph>
                <input
                  type="radio"
                  name="sortingType"
                  value={LAST_FIRST.toString()}
                  checked={this.state.sortOrder === LAST_FIRST}
                  onChange={this.onSortOrderValueChange}
                />
                Last Name, First Name
              </Paragraph>
            </div>
            <div>
              Formatted values is: {formatName(this.state.firstName, this.state.lastName, this.state.sortOrder)}
            </div>
          </ContentCenter>
          <SubTitle>Code</SubTitle>
          <SyntaxHighlighter language="js" style={syntaxTheme}>
            {codeString}
          </SyntaxHighlighter>
        </Content>
        <Footer>
          Released under the <Link href={`${repositoryLink}/blob/master/LICENSE`}>MIT license</Link>. <Link href={repositoryLink} >View source</Link>.
        </Footer>
      </AppContainer>
    );
  }
}
