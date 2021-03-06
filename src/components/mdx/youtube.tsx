import React from 'react'

import styled from '../../utils/styled'

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${tw('mx-auto w-full xl:w-3/4')}
`

const SubBtn = styled('a')`
  ${tw(
    'rounded mt-8 py-4 px-8 self-end shadow text-white font-bold text-center no-underline'
  )};

  background-color: #ff0000;
`

interface Props {
  videoId: string
}

const Youtube: React.FC<Props> = ({ videoId }) => {
  return (
    <Wrapper>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <SubBtn
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/equimper?sub_confirmation=1"
      >
        Subscribe
      </SubBtn>
    </Wrapper>
  )
}

export default Youtube
