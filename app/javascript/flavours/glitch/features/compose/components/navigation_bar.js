import { connect } from 'react-redux';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Avatar from 'flavours/glitch/components/avatar';
import Permalink from 'flavours/glitch/components/permalink';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { profileLink, signOutLink } from 'flavours/glitch/util/backend_links';
import { logOut } from 'mastodon/utils/log_out';
import { openModal } from 'mastodon/actions/modal';

const messages = defineMessages({
  logoutMessage: { id: 'confirmations.logout.message', defaultMessage: 'Are you sure you want to log out?' },
  logoutConfirm: { id: 'confirmations.logout.confirm', defaultMessage: 'Log out' },
});

const mapDispatchToProps = (dispatch, { intl }) => ({
  onLogout () {
    dispatch(openModal('CONFIRM', {
      message: intl.formatMessage(messages.logoutMessage),
      confirm: intl.formatMessage(messages.logoutConfirm),
      onConfirm: () => logOut(),
    }));
  },
});

export default @injectIntl
@connect(null, mapDispatchToProps)
class NavigationBar extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
  };

  handleLogoutClick = e => {
    const { dispatch, intl } = this.props;

    e.preventDefault();
    e.stopPropagation();

    dispatch(openModal('CONFIRM', {
      message: intl.formatMessage(messages.logoutMessage),
      confirm: intl.formatMessage(messages.logoutConfirm),
      onConfirm: () => logOut(),
    }));

    return false;
  }

  render () {
    return (
      <div className='drawer--account'>
        <Permalink className='avatar' href={this.props.account.get('url')} to={`/accounts/${this.props.account.get('id')}`}>
          <span style={{ display: 'none' }}>{this.props.account.get('acct')}</span>
          <Avatar account={this.props.account} size={48} />
        </Permalink>

        <div className='navigation-bar__profile'>
          <Permalink className='acct' href={this.props.account.get('url')} to={`/accounts/${this.props.account.get('id')}`}>
            <strong>@{this.props.account.get('acct')}</strong>
          </Permalink>

          { profileLink !== undefined && (
            <a
              className='edit'
              href={ profileLink }
            ><FormattedMessage id='navigation_bar.edit_profile' defaultMessage='Edit profile' /></a>
          )} | { signOutLink !== undefined && (
            <a href={signOutLink} onClick={this.handleLogoutClick}><FormattedMessage id='navigation_bar.logout' defaultMessage='Logout' /></a>
          )}
        </div>
      </div>
    );
  };
}
