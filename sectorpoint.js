// 섹터 데이터를 서버에서 불러옵니다.
let sectors = [];
fetch('/sectors')
    .then(response => response.json())
    .then(data => {
        sectors = data;
        sectors.forEach(sector => {
            // 섹터의 폴리곤을 지도에 추가합니다.
            const polygon = L.polygon(sector.coordinates, { color: 'blue' }).addTo(map);
            
            // 섹터 중심 좌표를 계산합니다.
            const centroid = polygon.getBounds().getCenter(); // 폴리곤의 중심 좌표를 구함

            // 중심 좌표에 섹터 이름을 표시합니다.
            const sectorLabel = L.divIcon({
                className: 'sector-label', // CSS 클래스 추가 가능
                html: sector.name,         // 섹터 이름을 텍스트로 삽입
            });

            // 지도에 이름을 추가
            L.marker(centroid, { icon: sectorLabel }).addTo(map);
        });
    })
    .catch(err => {
        console.error('섹터 데이터를 불러오는 중 오류 발생:', err);
    });
