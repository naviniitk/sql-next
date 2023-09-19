const InfoBox = () => {
  return (
    <div className="fd text-center">
      <div className="text-xl mb-2">This Project queries SQL database</div>
      <div className="mb-2">
        Database has the <code>customers</code> table, which has the following
        columns
      </div>
      <div className="p-2 bg-gray-300 mb-2"><code >
        customer_id, company_name, contact_name, contact_title, address, city,
        region, country, phone, fax, postal_code
      </code></div>
      
      <div>
        <strong>Note: </strong> Only <code>SELECT</code> queries are allowed
      </div>
    </div>
  );
};

export default InfoBox;
