// import { Controller, GetRequest, PostRequest, DeleteRequest, PutRequest } from 'typespring';
// import { AuthService } from '../services/auth.service';
// import { Request } from 'express';
// import { ClientsRepository } from '../repository/clients';
// import { IClient } from '../models/interfaces/clients';

// @Controller('/clients')
// export class ClientsController {

//     constructor(
//         private clientsRepo: ClientsRepository,
//     ) { }

//     @GetRequest('/', [AuthService.validateToken])
//     async getClients(): Promise<IClient[]> {
//         return await this.clientsRepo.getClients();
//     }

//     @GetRequest('/client')
//     async getClientClients(): Promise<IClient[]> {
//         return await this.clientsRepo.getClientClients();
//     }

//     @PostRequest('/', [AuthService.validateToken])
//     async createClients(req: Request): Promise<IClient> {
//         return await this.clientsRepo.createClient();
//     }

//     @PutRequest('/', [AuthService.validateToken])
//     async updateClients(req: Request): Promise<void> {
//         return await this.clientsRepo.updateClient(req.body);
//     }

//     @DeleteRequest('/:id', [AuthService.validateToken])
//     async deleteFeedback(req: Request): Promise<void> {
//         await this.clientsRepo.deleteClient(req.params.id);
//     }
// }