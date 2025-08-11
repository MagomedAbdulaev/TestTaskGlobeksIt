WITH RecursiveSubs AS (
    SELECT 
        s.id,
        s.parent_id,
        s.name,
        0 AS sub_level
    FROM dbo.subdivisions s
    WHERE s.id = (
        SELECT subdivision_id 
        FROM dbo.collaborators 
        WHERE id = 710253
    )

    UNION ALL

    -- Рекурсией добавляю
    SELECT 
        s.id,
        s.parent_id,
        s.name,
        rs.sub_level + 1
    FROM dbo.subdivisions s
    INNER JOIN RecursiveSubs rs ON s.parent_id = rs.id
    WHERE s.id NOT IN (100055, 100059)  -- Исключаем из за условия в тестовом задании
)

SELECT 
    c.id,
    c.name,
    rs.name AS sub_name,
    rs.id AS sub_id,
    rs.sub_level,
    COUNT(c2.id) AS colls_count

FROM RecursiveSubs rs
JOIN dbo.collaborators c 
    ON c.subdivision_id = rs.id
JOIN dbo.collaborators c2
    ON c2.subdivision_id = rs.id
WHERE c.age < 40

GROUP BY c.id, c.name, rs.name, rs.id, rs.sub_level

ORDER BY rs.sub_level, c.id;