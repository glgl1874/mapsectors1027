const fs = require('fs');

// 좌표 순서 변환 함수
function swapLatLong(coordinates) {
    return coordinates.map(coord => [coord[1], coord[0]]);
}

// JSON 파일을 읽어들입니다.
fs.readFile('pre-sectors.json', 'utf8', (err, data) => {
    if (err) {
        console.error('파일을 읽는 중 오류 발생:', err);
        return;
    }

    let sectors = JSON.parse(data);

    // 각 섹터의 좌표 순서를 변환합니다.
    sectors = sectors.map(sector => ({
        ...sector,
        coordinates: swapLatLong(sector.coordinates)
    }));

    // 변환된 데이터를 새로운 JSON 파일로 저장합니다.
    fs.writeFile('sectors.json', JSON.stringify(sectors, null, 4), err => {
        if (err) {
            console.error('파일을 저장하는 중 오류 발생:', err);
            return;
        }

        console.log('좌표 순서 변환 완료: sectors.json');
    });
});