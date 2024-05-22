import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const SlideInFromLeft = styled.div`
  animation: slide-in-left 1s ease-out forwards;
  margin-right: 700px;
  text-align: left;
  @keyframes slide-in-left {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const SlideInFromRight = styled.div`
  animation: slide-in-right 1s ease-out forwards;
  margin-left: 700px;
  text-align: left;
  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const TimelineContentStyled = styled(TimelineContent)`
  display: flex;
  justify-content: ${(props) => (props.align === 'left' ? 'flex-end' : 'flex-start')};
  text-align: ${(props) => (props.align === 'left' ? 'right' : 'left')};
  width: 45%; /* Adjust width for left and right alignment */
  @media (max-width: 960px) {
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;

const index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My educational journey has been transformative, marked by self-discovery and continuous growth. Here are the details of my educational background.
        </Desc>
        <TimelineSection>
          <Timeline position="alternate">
            {education.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContentStyled align={index % 2 === 0 ? 'left' : 'right'}>
                  {index % 2 === 0 ? (
                    <SlideInFromLeft>
                      <EducationCard education={edu} />
                    </SlideInFromLeft>
                  ) : (
                    <SlideInFromRight>
                      <EducationCard education={edu} />
                    </SlideInFromRight>
                  )}
                </TimelineContentStyled>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
