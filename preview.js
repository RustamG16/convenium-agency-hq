window.HQ_PUBLIC_PREVIEW=true;
const publicRoles=fetch('./roles.json').then(r=>r.json());
window.hqPreviewApi=async function(route,body){
 if(body!==undefined)throw new Error('public_preview_read_only');
 if(route==='session')return {csrf:'public-preview-read-only'};
 if(route==='status')return {roles:await publicRoles,ledger:false,notionConfigured:false,paused:true};
 if(route==='workspace')return {records:{},refreshedAt:null,stale:true,errors:{}};
 if(route==='jobs'||route==='operations')return [];
 if(route==='progress')throw new Error('private_progress_not_loaded');
 throw new Error('public_preview_read_only');
};
