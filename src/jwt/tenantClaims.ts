export function addTenantClaim(payload: JWTPayload, tenantId: string): JWTPayload {
  return { ...payload, tenant_id: tenantId };
}

export function extractTenant(token: DecodedJWT): string {
  return token.tenant_id || "default";
}
