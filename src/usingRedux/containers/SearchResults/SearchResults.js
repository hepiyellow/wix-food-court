import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions';
import {SearchStatus} from '../../reducers/searchReducer';

import Search from 'wix-style-react/Search';
import Loader from 'wix-style-react/Loader';
import s from './SearchResults.scss';

import loggerFactory from 'debug-logger';
const log = loggerFactory('SearchResults');

import DataDisplay from '../../components/DataDisplay';
import staticData from '../../../data';


const STATIC_SEARCH_RESPONSE = staticData;

/**
* Creates a filtered data array, selecting only rows in which the value of
* the property named [filedName] includes the filter string.
* @param {*} data Array of items (objects). An object must have a property named fieldName.
* @param {*} filterStr the filter string
* @param {*} fieldName the property to filter on.
*/
function getFilteredData(data, filterStr, fieldName) {
  return data.filter(row => {
    return row[fieldName].includes(filterStr);
  });
}

class SearchResults extends React.Component {
  render() {
    log.debug('render(): props=', this.props);
    const searchResponse = this.props.showStaticData ? STATIC_SEARCH_RESPONSE : this.props.searchResponse;

    const restaurantList = searchResponse.value.results.map(item => {
      return {
        title: item.title.he_IL,
        phone: item.contact.phone
      };
    });
    // TODO: extract filterInput component
    const filterInputOptions = restaurantList.map((item, index) => {
      return {
        id: index,
        value: item.title
      };
    });
    const filteredData = getFilteredData(restaurantList, this.props.filter, 'title');

    if (this.props.searchStatus.status === SearchStatus.IN_PROGRESS &&
       !this.props.showStaticData) {
      return (
        <Loader
          dataHook="search-loader"
          size="large"
          text={`Searching for [${this.props.searchStatus.searchTerm}]`}
          />
      );
    } else if (restaurantList.length === 0) {
      return (
        <div>No Data</div>
      );
    } else {
      return (
        <div>
          <div className={s.filterInput}>
            <Search
              id="filter"
              closeOnSelect={false}
              onManuallyInput={this.handleManuallyInputFilter}
              options={filterInputOptions}
              placeholder="Filter By Name"
              />
          </div>
          <DataDisplay
            data={filteredData}
            />
        </div>
      );
    }
  }

  @autobind
  handleManuallyInputFilter(inputValue) {
    this.props.updateFilter(inputValue);
  }
}

SearchResults.propTypes = {
  // This is a Redux mapped prop. Eslint forces it to be here.
  filter: PropTypes.string.isRequired,
  searchResponse: PropTypes.object.isRequired,
  showStaticData: PropTypes.bool.isRequired,
  searchStatus: PropTypes.object.isRequired,
  // from mapDispatchToProps
  updateFilter: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {dataDisplay, search} = state;
  return {
    filter: dataDisplay.filter,
    showStaticData: dataDisplay.showStaticData,
    searchResponse: search.searchResponse,
    searchStatus: search.searchStatus
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateFilter: bindActionCreators(Actions.display.setFilter, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

