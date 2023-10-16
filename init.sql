USE formulario;

CREATE TABLE IF NOT EXISTS contentcreators (
  id INT AUTO_INCREMENT PRIMARY KEY,
  names VARCHAR(255),
  channelName VARCHAR(255),
  subscribersCount INT,
  mostViewedVideo VARCHAR(255)
);
