import React, { useState } from 'react';
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useEpisodes } from "../hooks/useEpisodes";
import { useLocations } from "../hooks/useLocations";
import { DropdownList } from "./Collapse";



export const EpisodeList = () => {
  const { episodes } = useEpisodes();
  const { locations } = useLocations();

  return (
    <div>
      <DropdownList title="Episodes">
        {episodes.map((episode) => (
          <Collapse
            key={episode.id}
            className="episode"
            title={episode.episode + ":" + episode.name}
            content={
              <CharacterList
                ids={episode.characters.map((character) => {
                  const id = character.split("/").pop();
                  return id;
                })}
              />
            }
          />
        ))}
      </DropdownList>

      <DropdownList title="Locations">
        {locations.map((location) => (
          <Collapse
            key={location.id}
            className="episode"
            title={"Location: " + location.name}
            content={
              <CharacterList
                ids={location.residents.map((character) => {
                  const id = character.split("/").pop();
                  return id;
                })}
              />
            }
          />
        ))}
      </DropdownList>
    </div>
  );
};
