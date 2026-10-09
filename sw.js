  /* 角（显式定位） */
  const corner = document.createElement('div');
  corner.className = 'grid-corner';
  corner.textContent = '节次';
  corner.style.gridColumn = 1;
  corner.style.gridRow = 1;
  grid.appendChild(corner);

  /* 星期表头（显式定位） */
  for(let d=1; d<=7; d++){
    const div = document.createElement('div');
    const isToday = (d === today);
    div.className = 'grid-day' + (d>=6 ? ' weekend' : '') + (isToday ? ' today' : '');
    div.style.gridColumn = d + 1;
    div.style.gridRow = 1;
    const date = new Date(weekStart);
    date.setDate(date.getDate() + d - 1);
    const dayName = isToday ? '今天' : DAY_NAMES[d];
    div.innerHTML = `<div class="day-name">${dayName}</div><div class="day-date">${pad(date.getMonth()+1)}-${pad(date.getDate())}</div>`;
    grid.appendChild(div);
  }

  /* 12 行：节次列 + 空格子，全部显式定位 */
  for(let i=1; i<=12; i++){
    const pc = document.createElement('div');
    pc.className = 'grid-period';
    pc.style.gridColumn = 1;
    pc.style.gridRow = i + 1;
    pc.innerHTML = `<div class="p-num">${i}</div><div class="p-time">${SECTIONS[i].start}</div><div class="p-time">${SECTIONS[i].end}</div>`;
    grid.appendChild(pc);
    for(let d=1; d<=7; d++){
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.style.gridColumn = d + 1;
      cell.style.gridRow = i + 1;
      grid.appendChild(cell);
    }
  }
