import React, { Component } from 'react';
import { A } from './Elem';
import styled from 'styled-components';
const Span = styled.span`
  margin: 0 0.2em;
`;
const Trans = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto 1em;
`;
export default class TranLinks extends Component {
  render() {
    return (
      <Trans>
        <Span>
          <A href="http://learnlayout.com">english</A>
        </Span>
        <Span>
          <A href="http://es.learnlayout.com">español</A>
        </Span>
        <Span>
          <A href="http://fr.learnlayout.com">français</A>
        </Span>
        <Span>
          <A href="http://de.learnlayout.com">deutsch</A>
        </Span>
        <Span>
          <A href="http://nl.learnlayout.com">dutch</A>
        </Span>
        <Span>
          <A href="http://it.learnlayout.com">italiano</A>
        </Span>
        <Span>
          <A href="http://ru.learnlayout.com">русский</A>
        </Span>
        <Span>
          <A href="http://fa.learnlayout.com">فارسی</A>
        </Span>
        <Span>
          <A href="http://ar.learnlayout.com">عربى</A>
        </Span>
        <Span>
          <A href="http://zh.learnlayout.com">中文</A>
        </Span>
        <Span>
          <A href="http://zh-tw.learnlayout.com">正體中文</A>
        </Span>
        <Span>
          <A href="http://ko.learnlayout.com">한국어</A>
        </Span>
        <Span>
          <A href="http://ja.learnlayout.com">日本語</A>
        </Span>
        <Span>
          <A href="http://pt-br.learnlayout.com">português(brasil)</A>
        </Span>
        <Span>
          <A href="http://pt-pt.learnlayout.com">português(português)</A>
        </Span>
      </Trans>
    );
  }
}
