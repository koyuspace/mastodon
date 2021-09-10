import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { invitesEnabled, limitedFederationMode, version, repository, source_url } from 'flavours/glitch/util/initial_state';
import { securityLink } from 'flavours/glitch/util/backend_links';

export default @injectIntl
class LinkFooter extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  render () {
    return (
      <div className='getting-started__footer'>
        <ul>
          {invitesEnabled && <li><a href='/invites' target='_blank'><FormattedMessage id='getting_started.invite' defaultMessage='Invite people' /></a> · </li>}
          {!!securityLink && <li><a href='/auth/edit'><FormattedMessage id='getting_started.security' defaultMessage='Security' /></a> · </li>}
          {!limitedFederationMode && <li><a href='/about/more' target='_blank'><FormattedMessage id='navigation_bar.info' defaultMessage='About this server' /></a> · </li>}
          <li><a href='/apps/index.html' target='_blank'><FormattedMessage id='navigation_bar.apps' defaultMessage='Mobile apps' /></a> · </li>
          <li><a href='/terms' target='_blank'><FormattedMessage id='getting_started.terms' defaultMessage='Terms of service' /></a> · </li>
          <li><a href='/settings/applications' target='_blank'><FormattedMessage id='getting_started.developers' defaultMessage='Developers' /></a> · </li>
          <li><a href='https://docs.joinmastodon.org' target='_blank'><FormattedMessage id='getting_started.documentation' defaultMessage='Documentation' /></a></li>
        </ul>

        <p>
          <FormattedMessage
            id='getting_started.open_source_notice'
            defaultMessage='Glitchsoc is open source software, a friendly fork of {Mastodon}. You can contribute or report issues on GitHub at {github}.'
            values={{
              github: <span><a href={source_url} rel='noopener noreferrer' target='_blank'>{repository}</a> (v{version})</span>,
              Mastodon: <a href='https://github.com/tootsuite/mastodon' rel='noopener noreferrer' target='_blank'>Mastodon</a> }}
          />
        </p>
      </div>
    );
  }

};
