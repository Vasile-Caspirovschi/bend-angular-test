export interface Thing {
  id: number
  areaId: number
  joinedWith: number | null
  sku: number
  defaultSku: number
  status: string
  countActive: number
}