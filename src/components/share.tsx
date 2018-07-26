import React from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share'

import { constants } from '../utils/constants'
import styled from '../utils/styled'
import Facebook from './icons/facebook'
import GooglePlus from './icons/google-plus'
import Linkedin from './icons/linkedin'
import Reddit from './icons/reddit'
import Twitter from './icons/twitter'

const FacebookIcon = styled(Facebook)`
  ${tw('h-8 w-8 text-grey-dark cursor-pointer hover:text-blue-lighter')};
`

const TwitterIcon = styled(Twitter)`
  ${tw('h-8 w-8 text-grey-dark cursor-pointer hover:text-blue-lighter')};
`

const LinkedinIcon = styled(Linkedin)`
  ${tw('h-8 w-8 text-grey-dark cursor-pointer hover:text-blue-lighter')};
`

const RedditIcon = styled(Reddit)`
  ${tw('h-8 w-8 text-grey-dark cursor-pointer hover:text-blue-lighter')};
`

const GooglePlusIcon = styled(GooglePlus)`
  ${tw('h-8 w-8 text-grey-dark cursor-pointer hover:text-blue-lighter')};
`

const ShareWrapper = styled('div')`
  ${tw('flex items-center')};
`

const Root = styled('div')`
  ${tw('mt-12')};
`

interface IProps {
  url: string
  title: string
}

const Share = ({ url, title }: IProps) => (
  <Root>
    <ShareWrapper>
      <FacebookShareButton url={url}>
        <FacebookIcon />
      </FacebookShareButton>
      <TwitterShareButton
        title={title}
        url={url}
        via={constants.twitterUsername}
      >
        <TwitterIcon />
      </TwitterShareButton>
      <LinkedinShareButton title={title} url={url}>
        <LinkedinIcon />
      </LinkedinShareButton>
      <RedditShareButton title={title} url={url}>
        <RedditIcon />
      </RedditShareButton>
      <GooglePlusShareButton url={url}>
        <GooglePlusIcon />
      </GooglePlusShareButton>
    </ShareWrapper>
  </Root>
)

export default Share