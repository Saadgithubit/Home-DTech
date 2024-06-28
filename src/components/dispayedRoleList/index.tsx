'use client';

import React, { useState } from 'react';
import { Checkbox, IconButton, Typography, FormControlLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface DisplayedListProps {
  roleList: Role[];
}

interface Role {
  name: string;
  nestedRoleList: string[];
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
    setChecked(roleList.map(() => Array(4).fill(isChecked)));
  };

  const handleParentChange = (roleIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const newChecked = checked.map((roleChecks, index) =>
      index === roleIndex ? roleChecks.map(() => isChecked) : roleChecks
    );
    setChecked(newChecked);
  };

  const handleRoleChange = (roleIndex: number, nestedIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = checked.map((roleChecks, index) =>
      index === roleIndex
        ? roleChecks.map((check, idx) => (idx === nestedIndex ? event.target.checked : check))
        : roleChecks
    );
    setChecked(newChecked);
  };

  const handleToggle = (index: number) => {
    setExpandedIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      <div className="flex items-center">
        <Checkbox
          checked={checkedAll}
          onChange={handleCheckAll}
          inputProps={{ 'aria-label': 'controlled' }}
        />
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
                  onClick={() => handleToggle(roleIndex)}
                >
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
          );
        })}
      </div>
    </div>
  );
};

export default DisplayedList;
