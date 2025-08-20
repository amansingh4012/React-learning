import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label style={{ display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="checkbox"
        onChange={onChangeBtn}
        checked={themeMode === 'dark'}
      />
      <span>Toggle Theme</span>
    </label>
  );
}
