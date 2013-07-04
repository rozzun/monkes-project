
////////////////////////////////////
// football.db api wrapper

var football_api_new = function( opts )
{
  // 'use strict';

  var _defaults = {
                apiPathPrefix: 'http://footballdb.herokuapp.com/api/v1'
              };
  var _settings;


  function _init( opts )
  {
    _settings = _.extend( {}, _defaults, opts );
    
    debug( 'apiPathPrefix: ' + _settings.apiPathPrefix );
  }

  function _fetch_rounds( event_key, onsuccess )
  {
    var api_url = _settings.apiPathPrefix + '/event/' + event_key + '/rounds?callback=?';
    $.getJSON( api_url, onsuccess );
  }

  function _fetch_round( event_key, round_pos, onsuccess )
  {
    var api_url = _settings.apiPathPrefix + '/event/' + event_key + '/round/' + round_pos + '?callback=?';
    $.getJSON( api_url, onsuccess );
  }

  // call "c'tor/constructor"
  _init( opts );

  // return/export public api
  return {
     fetch_round:  _fetch_round,
     fetch_rounds: _fetch_rounds
  }
} // fn football_api_new
