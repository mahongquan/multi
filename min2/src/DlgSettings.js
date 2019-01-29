import React from 'react';
import { Modal } from 'react-bootstrap';
export default class App extends React.Component {
  render = () => {
    return (
      <Modal
        show={this.props.showModal}
        onClose={this.props.closeModal}
        onHide={this.props.closeModal}
      >
        <Modal.Header>设置</Modal.Header>
        <Modal.Body>
          <div className="hero short-hero blue-gradient-background">
            <div className="container padding">
              <h2 data-string="settingsPreferencesHeading">设置</h2>
            </div>
          </div>

          <div className="spacer" />
          <div className="container padding" id="privacy-settings-container">
            <h3 data-string="settingsPrivacyHeading">隐私设置</h3>

            <div className="setting-section">
              <input type="checkbox" id="checkbox-block-trackers" />
              <label
                htmlFor="checkbox-block-trackers"
                data-string="settingsContentBlockingToggle"
              >
                禁用跟踪和广告
              </label>
              <div
                className="light-fade setting-secondary-label"
                data-string="settingsEasyListCredit"
                data-allowhtml=""
              >
                基于 EasyList 和 EasyPrivacy.{' '}
                <a target="_blank" href="https://easylist.to/">
                  The EasyList authors
                </a>{' '}
                -{' '}
                <a
                  target="_blank"
                  href="https://creativecommons.org/licenses/by-sa/3.0/legalcode"
                >
                  view license
                </a>
                .
              </div>
            </div>
            <div className="setting-section">
              <input type="checkbox" id="checkbox-block-script" />
              <label htmlFor="checkbox-block-script">阻止脚本运行</label>
            </div>
            <div className="setting-section">
              <input type="checkbox" id="checkbox-block-image" />
              <label htmlFor="checkbox-block-image">阻止加载图片</label>
            </div>
          </div>

          <div className="spacer" />

          <div className="spacer" />
          <div className="container padding" id="appearance-settings-container">
            <h3 data-string="settingsAppearanceHeading">外观</h3>

            <div className="setting-section">
              <input type="checkbox" id="checkbox-dark-mode" />
              <label
                htmlFor="checkbox-dark-mode"
                data-string="settingsDarkModeToggle"
              >
                启用夜间模式
              </label>
              <div className="spacer" />
              <input type="checkbox" id="checkbox-history-button" />
              <label
                htmlFor="checkbox-history-button"
                data-string="settingsHistoryButtonToggle"
              >
                启用返回键
              </label>
            </div>
          </div>

          <div className="spacer" />
          <div className="container padding" id="swipe-settings-container">
            <h3 data-string="settingsAdditionalFeaturesHeading">其他功能</h3>

            <div className="setting-section">
              <input type="checkbox" id="checkbox-swipe-navigation" />
              <label
                htmlFor="checkbox-swipe-navigation"
                data-string="settingsSwipeNavigationToggle"
              >
                允许通过手势在页面上进行前进和后退操作。
              </label>
            </div>

            <div className="setting-section">
              <input type="checkbox" id="checkbox-userscripts" />
              <label
                htmlFor="checkbox-userscripts"
                data-string="settingsUserscriptsToggle"
              >
                允许使用者指令
              </label>
              <div
                className="light-fade setting-secondary-label"
                data-string="settingsUserscriptsExplanation"
                data-allowhtml=""
              >
                使用者指令允许您改变网站行为 -{' '}
                <a href="https://github.com/minbrowser/min/wiki/userscripts">
                  查看更多
                </a>
                .
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div
            className="container padding"
            id="search-engine-settings-container"
          >
            <h3 data-string="settingsSearchEngineHeading">搜索引擎</h3>
            <label
              htmlFor="defaultSearchEngine"
              data-string="settingsDefaultSearchEngine"
            >
              选择默认的搜索引擎:
            </label>{' '}
            &nbsp;
            <select
              id="default-search-engine"
              name="defaultSearchEngine"
              style={{ minWidth: '225px' }}
              defaultValue="DuckDuckGo"
            >
              <option>DuckDuckGo</option>
              <option>Google</option>
              <option>Bing</option>
              <option>Yahoo</option>
              <option>Baidu</option>
              <option>StartPage</option>
              <option>Wikipedia</option>
              <option>Yandex</option>
              <option>none</option>
              <option>custom</option>
            </select>
            <input
              id="custom-search-engine"
              style={{ marginLeft: '0.5em', minWidth: '325px' }}
              hidden=""
              placeholder="Replace the search term with %s"
            />
            <div
              className="light-fade"
              style={{ paddingTop: '0.4em' }}
              data-string="settingsDDGExplanation"
            >
              将 DuckDuckGo 设为默认的搜索引擎可以直接在搜索栏查看搜索结果。
            </div>
          </div>

          <div className="spacer" />
          <div className="container padding" id="keymap-settings-container">
            <h3 data-string="settingsKeyboardShortcutsHeading">快捷键</h3>
            <div
              className="light-fade"
              data-string="settingsKeyboardShortcutsHelp"
            >
              Use commas to separate multiple shortcuts.
            </div>

            <div className="setting-section">
              <ul id="key-map-list" className="setting-section">
                <li>
                  <label htmlFor="addPrivateTab">Add Private Tab</label>
                  <input type="text" name="addPrivateTab" id="addPrivateTab" />
                </li>
                <li>
                  <label htmlFor="toggleTasks">Toggle Tasks</label>
                  <input type="text" name="toggleTasks" id="toggleTasks" />
                </li>
                <li>
                  <label htmlFor="goBack">Go Back</label>
                  <input type="text" name="goBack" id="goBack" />
                </li>
                <li>
                  <label htmlFor="goForward">Go Forward</label>
                  <input type="text" name="goForward" id="goForward" />
                </li>
                <li>
                  <label htmlFor="enterEditMode">Enter Edit Mode</label>
                  <input type="text" name="enterEditMode" id="enterEditMode" />
                </li>
                <li>
                  <label htmlFor="completeSearchbar">Complete Searchbar</label>
                  <input
                    type="text"
                    name="completeSearchbar"
                    id="completeSearchbar"
                  />
                </li>
                <li>
                  <label htmlFor="closeTab">Close Tab</label>
                  <input type="text" name="closeTab" id="closeTab" />
                </li>
                <li>
                  <label htmlFor="restoreTab">Restore Tab</label>
                  <input type="text" name="restoreTab" id="restoreTab" />
                </li>
                <li>
                  <label htmlFor="gotoFirstTab">Goto First Tab</label>
                  <input type="text" name="gotoFirstTab" id="gotoFirstTab" />
                </li>
                <li>
                  <label htmlFor="gotoLastTab">Goto Last Tab</label>
                  <input type="text" name="gotoLastTab" id="gotoLastTab" />
                </li>
                <li>
                  <label htmlFor="addToFavorites">Add To Favorites</label>
                  <input
                    type="text"
                    name="addToFavorites"
                    id="addToFavorites"
                  />
                </li>
                <li>
                  <label htmlFor="toggleReaderView">Toggle Reader View</label>
                  <input
                    type="text"
                    name="toggleReaderView"
                    id="toggleReaderView"
                  />
                </li>
                <li>
                  <label htmlFor="switchToNextTab">Switch To Next Tab</label>
                  <input
                    type="text"
                    name="switchToNextTab"
                    id="switchToNextTab"
                  />
                </li>
                <li>
                  <label htmlFor="switchToPreviousTab">
                    Switch To Previous Tab
                  </label>
                  <input
                    type="text"
                    name="switchToPreviousTab"
                    id="switchToPreviousTab"
                  />
                </li>
                <li>
                  <label htmlFor="switchToNextTask">Switch To Next Task</label>
                  <input
                    type="text"
                    name="switchToNextTask"
                    id="switchToNextTask"
                  />
                </li>
                <li>
                  <label htmlFor="switchToPreviousTask">
                    Switch To Previous Task
                  </label>
                  <input
                    type="text"
                    name="switchToPreviousTask"
                    id="switchToPreviousTask"
                  />
                </li>
                <li>
                  <label htmlFor="closeAllTabs">Close All Tabs</label>
                  <input type="text" name="closeAllTabs" id="closeAllTabs" />
                </li>
                <li>
                  <label htmlFor="reload">Reload</label>
                  <input type="text" name="reload" id="reload" />
                </li>
                <li>
                  <label htmlFor="showAndHideMenuBar">
                    Show And Hide Menu Bar
                  </label>
                  <input
                    type="text"
                    name="showAndHideMenuBar"
                    id="showAndHideMenuBar"
                  />
                </li>
                <li>
                  <label htmlFor="followLink">Follow Link</label>
                  <input type="text" name="followLink" id="followLink" />
                </li>
              </ul>
            </div>
          </div>

          <div
            className="banner yellow-background"
            id="restart-required-banner"
            hidden=""
          >
            <div className="container padding">
              <i className="fa fa-info-circle" />
              <span data-string="settingsRestartRequired">
                您需要重启以应用这些修改
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={this.props.closeModal}>
            确定
          </button>
        </Modal.Footer>
      </Modal>
    );
  };
}
