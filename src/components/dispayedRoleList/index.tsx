'use client'
import * as React from 'react';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";

interface DisplayedListProps {
  roleList: Roll[]
}

interface Roll {
  name: string,
  nestedRoleList: string[]
}

const DisplayedList: React.FC<DisplayedListProps> = ({ roleList }) => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean[][]>(
    roleList.map(() => [false, false, false, false])
  );

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckedAll(isChecked);
    setChecked(
      roleList.map(() => [isChecked, isChecked, isChecked, isChecked])
    );
  };

  const handleParentChange = (roleIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const newChecked = checked.map((roleChecks, index) => {
      if (index === roleIndex) {
        return roleChecks.map(() => isChecked);
      }
      return roleChecks;
    });
    setChecked(newChecked);
  };

  const handleRoleChange = (roleIndex: number, nestedIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = checked.map((roleChecks, index) => {
      if (index === roleIndex) {
        const updatedRoleChecks = [...roleChecks];
        updatedRoleChecks[nestedIndex] = event.target.checked;
        return updatedRoleChecks;
      }
      return roleChecks;
    });
    setChecked(newChecked);
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
          onChange={handleCheckAll}
          inputProps={{ 'aria-label': 'controlled' }} />
        <p className='font-sans font-bold text-[#212529]'>Check All</p>
      </div>
      <p className="text-2xl font-semibold">Permissions:</p>
      <div className="flex flex-wrap justify-between">
        {roleList.map((item, roleIndex) => {
          const { name, nestedRoleList } = item;
          const isExpand = expandedIndexes.includes(roleIndex);
          const isParentChecked = checked[roleIndex].every(check => check);
          const isParentIndeterminate = !isParentChecked && checked[roleIndex].some(check => check);

          return (
            <div key={roleIndex} className="w-[30%]">
              <div className="flex space-x-1 items-center w-full">
                <IconButton
                  sx={{ border: '1px solid black', width: '20px', height: '20px', borderRadius: 0 }}
                  onClick={() => handleToggle(roleIndex)}>
                  {isExpand ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
                <FormControlLabel
                  label={<Typography sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: 'black', fontSize: '12px' }}>{name}</Typography>}
                  control={
                    <Checkbox
                      checked={isParentChecked || checkedAll}
                      indeterminate={isParentIndeterminate}
                      onChange={handleParentChange(roleIndex)}
                    />
                  }
                />
              </div>
              {isExpand && (
                <div className="flex flex-col pl-14">
                  {nestedRoleList.map((nestedRole, nestedIndex) => (
                    <FormControlLabel
                      key={nestedIndex}
                      label={<Typography sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: 'black', fontSize: '12px', margin: 0 }}>{nestedRole}</Typography>}
                      control={
                        <Checkbox
                          checked={checked[roleIndex][nestedIndex] || checkedAll}
                          onChange={handleRoleChange(roleIndex, nestedIndex)}
                        />
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default DisplayedList;
