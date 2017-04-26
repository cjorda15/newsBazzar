import React from 'react'
function ListSource({handleOptions}){

return (
  <select onChange={(e)=>{handleOptions(e.target.value)}} >
  <option>
    abc-news-au
    </option>
    <option>al-jazeera-english</option>
    <option>
    ars-technica
    </option>
    <option>
    associated-press
    </option>
    <option>
    bbc-news
    </option>
    <option>
    bbc-sport
    </option>
    <option>
    bild
    </option>
    <option>
    bloomberg
    </option>
    <option>
    breitbart-news
    </option>
    <option>
    business-insider
    </option>
    <option>
    buzzfeed
    </option>
    <option>
    cnbc
    </option>
    <option>
    cnn
    </option>
    <option>
    daily-mail
    </option>
    <option>
    die-zeit
    </option>
    <option>
    engadget
    </option>
    <option>
    entertainment-weekly
    </option>
    <option>
    espn
    </option>
    <option>
    espn-cric-info
    </option>
    <option>
    financial-times
    </option>
    <option>
    focus
    </option>
    <option>
    football-italia
    </option>
    <option>
    fortune
    </option>
    <option>
    four-four-two
    </option>
    <option>
    fox-sports
    </option>
    <option>
    google-news
    </option>
    <option>
    gruenderszene
    </option>
    <option>
    hacker-news
    </option>
    <option>
    handelsblatt
    </option>
    <option>
    ign
    </option>
    <option>
    independent
    </option>
    <option>
    mashable
    </option>
    <option>
    metro
    </option>
    <option>
    mirror
    </option>
    <option>
    mtv-news
    </option>
    <option>
    mtv-news-uk
    </option>
    <option>
    national-geographic
    </option>
    <option>
    new-scientist
    </option>
    <option>
    newsweek
    </option>
    <option>
    new-york-magazine
    </option>
    <option>
    nfl-news
    </option>
    <option>
    polygon
    </option>
    <option>
    recode
    </option>
    <option>
    reddit-r-all
    </option>
    <option>
    reuters
    </option>
    <option>
    spiegel-online
    </option>
    <option>
    t3n
    </option>
    <option>
    talksport
    </option>
    <option>
    techcrunch
    </option>
    <option>
    techradar
    </option>
    <option>
    the-economist
    </option>
    <option>
    the-guardian-au
    </option>
    <option>
    the-guardian-uk
    </option>
    <option>
    the-hindu
    </option>
    <option>
    the-huffington-post
    </option>
    <option>
    the-lad-bible
    </option>
    <option>
    the-new-york-times
    </option>
    <option>
    the-next-web
    </option>
    <option>
    the-sport-bible
    </option>
    <option>
    the-telegraph
    </option>
    <option>
    the-times-of-india
    </option>
    <option>
    the-verge
    </option>
    <option>
    the-wall-street-journal
    </option>
    <option>
    the-washington-post
    </option>
    <option>
    time
    </option>
    <option>
    usa-today
    </option>
    <option>
    wired-de
    </option>
    <option>
    wirtschafts-woche
    </option>
    </select>
)
}

export default ListSource
