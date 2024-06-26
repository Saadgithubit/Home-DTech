'use client'
import * as React from 'react';
import { Box, Checkbox, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

interface DisplayedListProps {
  roleList:Roll[]
}

interface Roll {
  name: string,
  nestedRoleList: string[]
}

const DisplayedList: React.FC<DisplayedListProps> = ({ roleList }) => {

  const [checkedAll, setCheckedAll] = useState(false);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [checkedRoles, setCheckedRoles] = useState<{ [key: string]: boolean }>({});
  const [indeterminateRoles, setIndeterminateRoles] = useState<{ [key: string]: boolean }>({});

  const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckedAll(isChecked);
    const newCheckedRoles: { [key: string]: boolean } = {};
    const newIndeterminateRoles: { [key: string]: boolean } = {};

    roleList.forEach(role => {
      newCheckedRoles[role.name] = isChecked;
      newIndeterminateRoles[role.name] = false;
      role.nestedRoleList.forEach(nestedRole => {
        newCheckedRoles[nestedRole] = isChecked;
      });
    });

    setCheckedRoles(newCheckedRoles);
    setIndeterminateRoles(newIndeterminateRoles);
  };

  const handleRoleChange = (role: string, nestedRoles: string[]) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckedRoles(prevState => {
      const newCheckedRoles = { ...prevState, [role]: isChecked };
      nestedRoles.forEach(nestedRole => {
        newCheckedRoles[nestedRole] = isChecked;
      });
      return newCheckedRoles;
    });

    setIndeterminateRoles(prevState => ({ ...prevState, [role]: false }));
  };

  const handleNestedRoleChange = (role: string, nestedRole: string, nestedRoles: string[]) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckedRoles(prevState => ({
      ...prevState,
      [nestedRole]: isChecked
    }));

    const allNestedChecked = nestedRoles.every(nr => checkedRoles[nr]);
    const someNestedChecked = nestedRoles.some(nr => checkedRoles[nr]);

    setCheckedRoles(prevState => ({
      ...prevState,
      [role]: allNestedChecked,
    }));

    setIndeterminateRoles(prevState => ({
      ...prevState,
      [role]: someNestedChecked && !allNestedChecked,
    }));
  };

  const handleToggle = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <Checkbox
          checked={checkedAll}
          onChange={handleChangeAll}
          inputProps={{ 'aria-label': 'controlled' }} />
        <p>Check All</p>
      </div>
      <p className="text-2xl font-semibold">Permissions:</p>
      <div className="flex flex-wrap justify-between">
        {roleList.map((item, index) => {
          const { name, nestedRoleList } = item;
          const isExpanded = expandedIndexes.includes(index);
          const isRoleChecked = !!checkedRoles[name];
          const isIndeterminate = !!indeterminateRoles[name];

          return (
            <div key={index} className="w-[30%]">
              <div className="flex items-center w-full">
                <IconButton
                  sx={{ border: '1px solid black', width: '20px', height: '20px', borderRadius: 0 }}
                  onClick={() => handleToggle(index)}>
                  {isExpanded ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
                <span className="flex items-center">
                  <Checkbox
                    checked={isRoleChecked}
                    indeterminate={isIndeterminate}
                    onChange={handleRoleChange(name, nestedRoleList)}
                    inputProps={{ 'aria-label': 'controlled' }} />
                  <p className="text-sm font-semibold">{name}</p>
                </span>
              </div>
              {isExpanded && nestedRoleList.map((nestedItem, nestedIndex) => {
                const isNestedRoleChecked = !!checkedRoles[nestedItem];
                return (
                  <div key={nestedIndex} className=" flex flex-col p-2">
                    <span className="inline-flex animate-fade pl-12 space-x-2 items-center">
                      <Checkbox
                        sx={{ width: '20px', height: '22px' }}
                        checked={isNestedRoleChecked}
                        onChange={handleNestedRoleChange(name, nestedItem, nestedRoleList)}
                        inputProps={{ 'aria-label': 'controlled' }} />
                      <p className="text-sm font-semibold">{nestedItem}</p>
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayedList;
