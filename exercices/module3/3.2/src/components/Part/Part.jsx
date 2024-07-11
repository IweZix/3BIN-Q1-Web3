import React from 'react';

export const Part = ( { part } ) => {
    return (
        <div>
            {part.name} {part.exercises}
        </div>
    );
}
