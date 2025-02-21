import React from 'react'
import { ArrowLeft,IndianRupee,Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TermsConditions() {
  const navigate = useNavigate();
  return (
    <div className='m-3'>
       {/*First Container */}
       <div className='firtsDiv flex justify-between items-center'>
        <ArrowLeft className='cursor-pointer' size={28} onClick={()=>{navigate('/profile')}}/>
         <p className='text-2xl font-bold'>Terms and Conditions</p>
         <Settings size={28} className='text-white'/>
       </div>
       {/* main container */}
       <div className='mt-6'>
       <p className='text-lg font-semibold'>01. Account Registration</p>
Users must create an account to access the cloud storage service. They are responsible for maintaining the security of their login credentials.

<p className='text-lg font-semibold'>02. Data Privacy and Security</p>
The service encrypts stored data, but users are responsible for protecting their sensitive information. The company is not liable for data breaches caused by user negligence.

<p className='text-lg font-semibold'>03. Storage Limits and Fair Usage</p>
Free and paid plans have specific storage limits. Exceeding these limits may result in restricted access or additional charges.

<p className='text-lg font-semibold'>04. Prohibited Content</p>
Users must not upload illegal, copyrighted, or harmful content, including but not limited to malware, explicit material, or copyrighted files without permission.

<p className='text-lg font-semibold'>05. Data Retention and Deletion</p>
Inactive accounts may be subject to deletion after a certain period. Users must back up important files, as the company is not responsible for lost data.

<p className='text-lg font-semibold'>06. Service Availability</p>
While the service aims for 99.9% uptime, occasional downtime may occur due to maintenance or unforeseen technical issues.

<p className='text-lg font-semibold'>07. Termination of Account</p>
The company reserves the right to suspend or terminate accounts that violate these terms, engage in suspicious activity, or abuse the service.

<p className='text-lg font-semibold'>08. Third-Party Integrations</p>
Users may connect third-party services, but the company is not responsible for data shared with or processed by third parties.
Comapany can share the users data to the Advertising company for the user specific Advertisements.

<p className='text-lg font-semibold'>09. Refund and Subscription Policy</p>
Paid plans are billed on a recurring basis. Refunds are only issued in cases where the service fails to meet its promised functionality.

<p className='text-lg font-semibold'>10. Modifications to Terms</p>
The company reserves the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
       </div>


    </div>
  )
}

export default TermsConditions
