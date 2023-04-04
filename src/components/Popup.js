import React, { useState } from 'react';

const Popup = (fundDetail) => {
  
  const [availableUnits, setAvailableUnits] = useState('');
  
  const handleBuy = () => {
    // handle buy button click
  };

  const handleSell = () => {
    // handle sell button click
  };

  return (
    <Container>
      <Box>
        <h2>Fund Details</h2>
        { fundDetail.map((ele) => (
            <>
                <Box>
                    <h5>{ele.schemeName}</h5>
                </Box>
                <Stack direction="row" spacing={2}>
                    <h6>{ele.schemeCategory}</h6>
                    <h6>{ele.schemeType}</h6>
                </Stack>
                <Box className="form-group">
                    <h6>{ele.fundHouse}</h6>
                </Box>
                <Box className="form-group">
                    <h6>{ele.data.nav}</h6>
                </Box>
                <Box className="form-group">
                    <h6>100 Units</h6>
                </Box>
            </>
        ))}
      </Box>
    </Container>
  );
};

export default FundModal;
